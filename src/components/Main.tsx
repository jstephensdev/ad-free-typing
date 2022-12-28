import { useKeyDetection } from '../hooks/useKeyDetection';
import { useEffect, useState } from 'react';
import { currentTime } from '../services/currentTime';
import { setStartTime } from '../store/startTimeSlice';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';

export const Main = () => {
    const startTime = useAppSelector((state) => state.startTime.value);
    const easyText = useAppSelector((state) => state.textSelection.easy);
    const initialText = easyText;
    const dispatch = useAppDispatch();
    const [wordCount, setWordCount] = useState(0);
    const [wpm, setWpm] = useState('00.00');
    const [duration, setDuration] = useState('00.00');

    const [leftPadding, setLeftPadding] = useState(
        new Array(30).fill(' ').join('')
    );
    const [outgoingChars, setOutgoingChars] = useState('');
    const [currentChar, setCurrentChar] = useState(initialText.charAt(0));
    const [incomingChars, setIncomingChars] = useState(
        initialText.substring(1)
    );

    const [accuracy, setAccuracy] = useState('000.00');
    const [typedChars, setTypedChars] = useState('');

    const handleText = (
        updatedIncomingChars: string,
        updatedOutgoingChars: string,
        updatedTypedChars: string
    ): void => {
        if (leftPadding.length > 0) {
            setLeftPadding(leftPadding.substring(1));
        }
        setOutgoingChars((updatedOutgoingChars += currentChar));
        setTypedChars(updatedTypedChars);
        setCurrentChar(incomingChars.charAt(0));

        updatedIncomingChars = incomingChars.substring(1);
        if (updatedIncomingChars.split(' ').length < 10) {
            updatedIncomingChars += ' ' + initialText;
        }
        setIncomingChars(updatedIncomingChars);
    };

    useKeyDetection((key) => {
        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;
        let updatedTypedChars = typedChars + key;

        if (key === currentChar) {
            if (startTime === 0) {
                dispatch(setStartTime(currentTime()));
            }
            handleText(
                updatedIncomingChars,
                updatedOutgoingChars,
                updatedTypedChars
            );
            if (incomingChars.charAt(0) === ' ') {
                setWordCount(wordCount + 1);
                const durationInMinutes = (currentTime() - startTime) / 60000.0;
                setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
            }
        }
        if (
            updatedOutgoingChars.length <= updatedTypedChars.length &&
            updatedOutgoingChars.length > 0 &&
            key.length === 1
        ) {
            setTypedChars(updatedTypedChars);
            setAccuracy(
                (
                    (updatedOutgoingChars.length * 100) /
                    updatedTypedChars.length
                ).toFixed(2)
            );
        }
    });

    useEffect(() => {
        let interval: any;
        if (startTime > 0) {
            interval = setInterval(() => {
                const duration = new Date(currentTime() - startTime)
                    .toLocaleTimeString('en-US')
                    .slice(2, 7);
                setDuration(duration);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [startTime]);

    return (
        <>
            <section className="stats">
                <span>{`Duration: `}</span>
                <span className="duration">{`${
                    startTime === 0 ? '00:00' : duration
                }`}</span>
                <span>{` | WPM: `}</span>
                <span className="wpm">{`${wpm}`}</span>
                <span>{` | ACC: `}</span>
                <span className="acc">{`${accuracy}%`}</span>
                <span>{` | Error Rate: `}</span>
                <span className="error-rate">{`${
                    accuracy === '000.00'
                        ? '000.00'
                        : (100 - Number(accuracy)).toFixed(2)
                }%`}</span>
            </section>
            <section className="text-section">
                <p>
                    <span className="character-out">
                        {(leftPadding + outgoingChars).slice(-30)}
                    </span>
                    <span className="character-current">{currentChar}</span>
                    <span>{incomingChars.substring(0, 30)}</span>
                </p>
            </section>
        </>
    );
};
