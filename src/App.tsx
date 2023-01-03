import './css/App.css';
import { useKeyDetection } from './hooks/useKeyDetection';
import { currentTime } from './services/currentTime';
import { setAcc, setStartTime, setWordCount, setWpm } from './store/slices/statsSlice';
import {
    setIncomingChars,
    setCurrentChar,
    setOutgoingChars,
    setTypedChars,
    setLeftPadding,
} from './store/slices/textSlice';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { Stats } from './components/Stats';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard/Keyboard';
import { Text } from './components/Text';

export const App = () => {
    const dispatch = useAppDispatch();
    const startTime = useAppSelector((state) => state.stats.startTime);
    const text = useAppSelector((state) => state.text.text);
    const incomingChars = useAppSelector((state) => state.text.incomingChars);
    const outgoingChars = useAppSelector((state) => state.text.outgoingChars);
    const currentChar = useAppSelector((state) => state.text.currentChar);
    const typedChars = useAppSelector((state) => state.text.typedChars);
    const leftPadding = useAppSelector((state) => state.text.leftPadding);
    const wordCount = useAppSelector((state) => state.stats.wordCount);

    useKeyDetection((key: string) => {
        let updatedTypedChars = typedChars + key;
        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;

        if (key === currentChar) {
            if (startTime === 0) {
                dispatch(setStartTime(currentTime()));
            }
            if (leftPadding.length > 0) {
                dispatch(setLeftPadding(leftPadding.substring(1)));
            }
            dispatch(setTypedChars(updatedTypedChars));
            dispatch(setOutgoingChars((updatedOutgoingChars += currentChar)));
            dispatch(setCurrentChar(incomingChars.charAt(0)));
            updatedIncomingChars = incomingChars.substring(1);
            if (updatedIncomingChars.split(' ').length < 10) {
                updatedIncomingChars += ' ' + text;
            }
            dispatch(setIncomingChars(updatedIncomingChars));

            if (incomingChars.charAt(0) === ' ') {
                dispatch(setWordCount(wordCount + 1));
                const durationInMinutes = (currentTime() - startTime) / 60000.0;
                dispatch(
                    setWpm(((wordCount + 1) / durationInMinutes).toFixed(2))
                );
            }
        }
        if (
            updatedOutgoingChars.length <= updatedTypedChars.length &&
            updatedOutgoingChars.length > 0
        ) {
            dispatch(setTypedChars(updatedTypedChars));
            dispatch(
                setAcc(
                    (
                        (updatedOutgoingChars.length * 100) /
                        updatedTypedChars.length
                    ).toFixed(2)
                )
            );
        }
    });
    return (
        <>
            <Header />
            <section className="app">
                <Stats />
                <Text />
                <Keyboard />
            </section>
        </>
    );
};
