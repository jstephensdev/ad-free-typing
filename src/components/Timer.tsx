import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks';
import { currentTime } from '../services/currentTime';

export const Timer = () => {
    const dispatch = useAppDispatch();
    const startTime = useAppSelector((state) => state.stats.startTime);
    const [duration, setDuration] = useState('00.00');

    useEffect(() => {
        let interval: any;
        if (startTime > 0) {
            interval = setInterval(() => {
                const duration = new Date(currentTime() - startTime);
                setDuration(duration.toLocaleTimeString('en-US').slice(2, 7));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [startTime, dispatch]);

    return (
        <>
            <span className="duration">{`${
                startTime === 0 ? '00:00' : duration
            }`}</span>
        </>
    );
};
