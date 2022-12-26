import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { setKey } from '../store/keySlice';

export const useKeyDetection = (callback: (arg0: any) => any) => {
    const keyPress = useAppSelector((state) => state.keyPressed.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const downHandler = ({ key }: any) => {
            if (keyPress !== key) {
                dispatch(setKey(key));
                callback && callback(key);
            }
        };

        const upHandler = () => {
            dispatch(setKey(''));
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
