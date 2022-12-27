import { KeyboardRows, key } from './KeyboardRows';
import { useAppSelector } from '../../hooks/reduxHooks';

export const Keyboard = () => {
    const keyRows: Array<Array<key>> = KeyboardRows;
    const keyPressed = useAppSelector((state) => state.keyPressed.value);

    return (
        <>
            <div className="keyboard">
                {keyRows.map((row: Array<key>, index) => (
                    <div className="keyboard-row" key={index}>
                        {row.map((key: key) => (
                            <div
                                className={
                                    keyPressed === key.name ||
                                    keyPressed === key?.key ||
                                    (Array.isArray(key.name) &&
                                        keyPressed === key.name[0]) ||
                                    (Array.isArray(key.name) &&
                                        keyPressed === key.name[1])
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
        </>
    );
};
