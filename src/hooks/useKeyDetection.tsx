import { useEffect, useState } from 'react';

export const useKeyDetection = (callback: any) => {
    const [keyPress, setKeyPress] = useState('');

    useEffect(() => {
        const downHandler = ({ key }: any) => {
            if (keyPress !== key && key.length === 1) {
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
