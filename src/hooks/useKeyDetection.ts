import { useEffect, useState } from 'react';

const keysToRegister: string[] = [
    'CapsLock',
    'Shift',
    'Control',
    'WakeUp',
    'Alt',
    'Tab',
    'Backspace',
];

export const useKeyDetection = (callback: (key: string) => void): string => {
    const [keyPress, setKeyPress] = useState('');

    useEffect(() => {
        const downHandler = (e: KeyboardEvent): void => {
            if (
                keyPress !== e.key ||
                e.key.length === 1 ||
                keysToRegister.includes(e.key)
            ) {
                setKeyPress(e.key);
                callback && callback(e.key);
            }
        };

        const upHandler = (): void => {
            setKeyPress('');
        };
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    });
    return keyPress;
};
