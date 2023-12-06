import { KeyboardRows, key } from './KeyboardRows';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { useKeyDetection } from '../../hooks/useKeyDetection';
import { currentTime } from '../../services/currentTime';
import {
  resetStats,
  setAcc,
  setDuration,
  setRecentStat,
  setStartTime,
  setWordCount,
  setWpm,
} from '../../store/slices/statsSlice';
import {
  setIncomingChars,
  setCurrentChar,
  setOutgoingChars,
  setTypedChars,
  TextMode,
  setText,
} from '../../store/slices/textSlice';
import { setUrl } from '../../store/slices/routingSlice';
import { useState } from 'react';
import IonIcon from '@reacticons/ionicons';

export const Keyboard = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const keyRows: Array<Array<key>> = KeyboardRows;
  const startTime = useAppSelector((state) => state.stats.startTime);
  const text = useAppSelector((state) => state.text.text);
  const incomingChars = useAppSelector((state) => state.text.incomingChars);
  const outgoingChars = useAppSelector((state) => state.text.outgoingChars);
  const currentChar = useAppSelector((state) => state.text.currentChar);
  const typedChars = useAppSelector((state) => state.text.typedChars);
  const wordCount = useAppSelector((state) => state.stats.wordCount);
  const mode: TextMode = useAppSelector((state) => state.text.mode);
  const [show, setShow] = useState(true);

  const keyPressed = useKeyDetection((key: string) => {
    let updatedTypedChars = typedChars + key;
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;

    if (key === currentChar) {
      if (startTime === 0) {
        dispatch(setStartTime(currentTime()));
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
        dispatch(setWpm(((wordCount + 1) / durationInMinutes).toFixed(2)));
        const duration = new Date(currentTime() - startTime);
        dispatch(setDuration(duration.toLocaleTimeString('en-US').slice(2, 7)));
      }
    }
    if (
      updatedOutgoingChars.length <= updatedTypedChars.length &&
      updatedOutgoingChars.length > 0 &&
      key.length === 1
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
    if (text.length === outgoingChars.length) {
      dispatch(setRecentStat(mode));
      dispatch(setUrl('/recentStats'));
      dispatch(resetStats());
      dispatch(setText(mode));
    }
  });

  return (
    <>
      <IonIcon
        title={show ? 'Hide keyboard' : 'Show keyboard'}
        className="ionIcon"
        name={show ? 'remove-circle' : 'add-circle'}
        size="large"
        data-testid="reset"
        onClick={() => setShow(!show)}
      />
      {show ? (
        <section>
          <div className="keyboard">
            {keyRows.map((row: Array<key>, index) => (
              <div className="keyboard-row" key={index}>
                {row.map((key: key) => (
                  <div
                    className={
                      keyPressed === key.name ||
                      keyPressed === key?.key ||
                      (Array.isArray(key.name) && keyPressed === key.name[0]) ||
                      (Array.isArray(key.name) && keyPressed === key.name[1])
                        ? key.class + ' key-pressed'
                        : key.class
                    }
                    key={`${key.id} + ${key.name}`}
                  >
                    {Array.isArray(key.name) ? (
                      <>
                        <span>{key.name[0]}</span>
                        <span>{key.name[1]}</span>
                      </>
                    ) : (
                      key.name
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      ) : (
        ''
      )}
    </>
  );
};
