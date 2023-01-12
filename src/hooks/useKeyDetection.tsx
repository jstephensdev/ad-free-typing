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

export const useKeyDetection = (callback: any) => {
    const [keyPress, setKeyPress] = useState('');

    useEffect(() => {
        const downHandler = ({ key }: any) => {
            if (
                keyPress !== key ||
                key.length === 1 ||
                keysToRegister.includes(key)
            ) {
                setKeyPress(key);
                callback && callback(key);
            }
        };

        const upHandler = () => {
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
