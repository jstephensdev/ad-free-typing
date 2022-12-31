import { useEffect, useState } from 'react';
import { useAppSelector } from '../hooks/reduxHooks';
import { currentTime } from '../services/currentTime';

export const Timer = () => {
    const startTime = useAppSelector((state) => state.stats.startTime);
    const [duration, setDuration] = useState('00.00');
    useEffect(() => {
        let interval: any;
        if (startTime > 0) {
            interval = setInterval(() => {
                const duration = new Date(currentTime() - startTime)
                    .toLocaleTimeString('en-US')
                    .slice(2, 7);
                setDuration(duration);
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
