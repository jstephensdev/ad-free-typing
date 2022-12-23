import { keyboardConfig, key } from '../keyboardConfig';
import { useEffect, useState } from 'react';

export const Keyboard = () => {
    const keyRows: Array<Array<key>> = keyboardConfig;

    const [keyPressed, setKeyPressed] = useState('');

    const downHandler = ({ key }: any): void => {
        setKeyPressed(key);
    };

    const upHandler = () => {
        setKeyPressed('');
    };

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
    }, [keyPressed]);

    return (
        <>
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
