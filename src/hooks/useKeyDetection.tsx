import { useState, useEffect } from 'react';

export const useKeyDetection = (callback: (arg0: any) => any) => {
    const [keyPress, setKeyPress] = useState('');

    useEffect(() => {
        const downHandler = ({ key }: any) => {
            if (keyPress !== key) {
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
    }, [keyPress]);
    return keyPress;
};
