import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { currentTime } from '../services/currentTime';
import { setDuration } from '../store/statsSlice';

export const Timer = () => {
    const dispatch = useAppDispatch();
    const startTime = useAppSelector((state) => state.stats.startTime);
    const duration = useAppSelector((state) => state.stats.duration);
    useEffect(() => {
        let interval: any;
        if (startTime > 0) {
            interval = setInterval(() => {
                const duration = new Date(currentTime() - startTime)
                    .toLocaleTimeString('en-US')
                    .slice(2, 7);
                dispatch(setDuration(duration));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [startTime]);
    return (
        <>
            <span className="duration">{`${
                startTime === 0 ? '00:00' : duration
            }`}</span>
        </>
    );
};
