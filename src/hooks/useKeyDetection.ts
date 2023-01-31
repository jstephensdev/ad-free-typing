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
            // if keyPress is CapsLock and key is not CapsLock, CapsLock is on
            if (keyPress === keysToRegister[0] && e.key !== keysToRegister[0]) {
                setKeyPress(keysToRegister[0]);
                return;
            }
            // if keyPress is CapsLock and key is CapsLock, CapsLock is not on
            if (keyPress === keysToRegister[0] && keysToRegister[0] === e.key) {
                setKeyPress('');
                return;
            }
            if (
                keyPress !== e.key ||
                e.key.length === 1 ||
                keysToRegister.includes(e.key)
            ) {
                setKeyPress(e.key);
                callback && callback(e.key);
            }
        };

        const upHandler = (e: KeyboardEvent): void => {
            // if keyPress is CapsLock and the key is not CapsLock, CapsLock is on
            if (keyPress === keysToRegister[0] && keysToRegister[0] !== e.key) {
                setKeyPress(keysToRegister[0]);
                return;
            }
            if (keysToRegister[0] !== e.key) {
                setKeyPress('');
            }
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
