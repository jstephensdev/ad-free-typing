import { keyboardConfig, key } from '../keyboardConfig';
import { useEffect, useState } from 'react';

export const Keyboard = () => {
    const keyRows: Array<Array<key>> = keyboardConfig;

    const [keyPressed, setKeyPressed] = useState('');

    const downHandler = ({ key }: any): void => {
        setKeyPressed(key);
    };

    useEffect(() => {
        console.log(keyPressed);
        window.addEventListener('keydown', downHandler);
    }, [keyPressed]);

    return (
        <>
            <table>
                <tbody>
                    {keyRows.map((row: Array<key>, index) => (
                        <tr className="keyboard-row" key={index}>
                            {row.map((key: key) => (
                                <td className={key.class} key={key.id}>
                                    {Array.isArray(key.name) ? (
                                        <span className="keyboard-key-double">
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
