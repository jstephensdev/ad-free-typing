import { keyboardConfig, key } from '../keyboardConfig';
import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

export const Keyboard = () => {
    const keyRows: Array<Array<key>> = keyboardConfig;

    const initialText = faker.lorem.paragraph();

    const [leftPadding, setLeftPadding] = useState(
        new Array(40).fill(' ').join('')
    );
    const [outgoingChars, setOutgoingChars] = useState('');
    const [currentChar, setCurrentChar] = useState(initialText.charAt(0));
    const [incomingChars, setIncomingChars] = useState(
        initialText.substring(1)
    );

    const [keyPressed, setKeyPressed] = useState('');

    const downHandler = ({ key }: any): void => {
        setKeyPressed(key);
    };

    const upHandler = () => {
        setKeyPressed('');
    };

    useEffect(() => {
        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;

        if (keyPressed === currentChar) {
            if (leftPadding.length > 0) {
                setLeftPadding(leftPadding.substring(1));
            }
            updatedOutgoingChars += currentChar;
            setOutgoingChars(updatedOutgoingChars);

            setCurrentChar(incomingChars.charAt(0));

            updatedIncomingChars = incomingChars.substring(1);
            if (updatedIncomingChars.split(' ').length < 10) {
                updatedIncomingChars += ' ' + initialText;
            }
            setIncomingChars(updatedIncomingChars);
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
            <section>
                <p className="text-section">
                    <span className="character-out">
                        {(leftPadding + outgoingChars).slice(-40)}
                    </span>
                    <span className="character-current">{currentChar}</span>
                    <span>{incomingChars.substring(0, 40)}</span>
                </p>
            </section>
            <table>
                <tbody>
                    {keyRows.map((row: Array<key>, index) => (
                        <tr className="keyboard-row" key={index}>
                            {row.map((key: key) => (
                                <td
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
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
