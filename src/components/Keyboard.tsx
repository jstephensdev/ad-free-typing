import { keyboardConfig, key } from '../keyboardConfig';
import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

export const Keyboard = () => {
    const keyRows: Array<Array<key>> = keyboardConfig;

    const [startTime, setStartTime] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [wpm, setWpm] = useState('00.00');

    const currentTime = () => new Date().getTime();

    const initialText = faker.lorem.paragraph();

    const [leftPadding, setLeftPadding] = useState(
        new Array(30).fill(' ').join('')
    );
    const [outgoingChars, setOutgoingChars] = useState('');
    const [currentChar, setCurrentChar] = useState(initialText.charAt(0));
    const [incomingChars, setIncomingChars] = useState(
        initialText.substring(1)
    );

    const [keyPressed, setKeyPressed] = useState('');

    const [accuracy, setAccuracy] = useState('000.00');
    const [typedChars, setTypedChars] = useState('');

    const downHandler = ({ key }: any): void => {
        setKeyPressed(key);
    };

    const upHandler = () => {
        setKeyPressed('');
    };

    useEffect(() => {
        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;
        const updatedTypedChars = typedChars + keyPressed;

        if (keyPressed === currentChar) {
            if (startTime === 0) {
                setStartTime(currentTime());
            }
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
            if (incomingChars.charAt(0) === ' ') {
                setWordCount(wordCount + 1);
                const durationInMinutes = (currentTime() - startTime) / 60000.0;
                setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
            }
        }

        if (
            updatedOutgoingChars.length <= updatedTypedChars.length &&
            updatedOutgoingChars.length > 0 &&
            keyPressed !== 'Enter' &&
            keyPressed !== 'Shift' &&
            keyPressed !== 'Ctrl'
        ) {
            setTypedChars(updatedTypedChars);
            setAccuracy(
                (
                    (updatedOutgoingChars.length * 100) /
                    updatedTypedChars.length
                ).toFixed(2)
            );
        }

        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            // cleanup or else performance issue occurs
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, [keyPressed]);

    return (
        <>
            <section className="stats">
                <span>{`Duration: `}</span>
                <span className="duration">{`${
                    startTime === 0
                        ? '00:00'
                        : new Date(currentTime() - startTime)
                              .toLocaleTimeString('en-US')
                              .slice(2, 7)
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
            <div className="keyboard">
                {keyRows.map((row: Array<key>, index) => (
                    <div className="keyboard-row" key={index}>
                        {row.map((key: key) => (
                            <div
                                className={
                                    keyPressed === key.name
                                        ? key.class + ' key-pressed'
                                        : key.class
                                }
                                key={`${key.id} + ${key.name}`}
                            >
                                {Array.isArray(key.name) ? (
                                    <span
                                        className={
                                            keyPressed === key.name[0] ||
                                            keyPressed === key.name[1]
                                                ? 'keyboard-key-double' +
                                                  ' key-pressed'
                                                : 'keyboard-key-double'
                                        }
                                    >
                                        <span>{key.name[0]}</span>
                                        <span>{key.name[1]}</span>
                                    </span>
                                ) : (
                                    key.name
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};
