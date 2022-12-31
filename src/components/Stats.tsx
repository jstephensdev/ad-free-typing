import { useAppSelector } from '../hooks/reduxHooks';
import { Timer } from './Timer';

export const Stats = () => {
    const wpm = useAppSelector((state) => state.stats.wpm);
    const acc = useAppSelector((state) => state.stats.acc);

    return (
        <>
            <section className="stats">
                <span>{`Duration: `}</span>
                <Timer />
                <span>{` | WPM: `}</span>
                <span className="wpm">{`${wpm}`}</span>
                <span>{` | ACC: `}</span>
                <span className="acc">{`${acc}%`}</span>
                <span>{` | Error Rate: `}</span>
                <span className="error-rate">{`${
                    acc === '000.00' ? '000.00' : (100 - Number(acc)).toFixed(2)
                }%`}</span>
            </section>
        </>
    );
};
