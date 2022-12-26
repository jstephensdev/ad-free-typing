import { useState, useEffect } from 'react';

export const useKeyDetection = (callback: (arg0: any) => any) => {
    const [keyPressed, setKeyPressed] = useState('');

    useEffect(() => {
        const downHandler = ({ key }: any) => {
            if (keyPressed !== key && key.length === 1) {
                setKeyPressed(key);
                callback && callback(key);
            }
        };

        const upHandler = () => {
            setKeyPressed('');
        };
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, [keyPressed]);
    return keyPressed;
};
