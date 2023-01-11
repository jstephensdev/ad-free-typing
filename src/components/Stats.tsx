import { useAppSelector } from '../hooks/reduxHooks';
import { Timer } from './Timer';

export const Stats = () => {
    const wpm = useAppSelector((state) => state.stats.wpm);
    const acc = useAppSelector((state) => state.stats.acc);

    return (
        <>
            <section className="stats">
                <span>
                    {`Duration: `} &nbsp; <Timer />
                </span>

                <span>
                    {` | WPM:`} &nbsp; <span className="wpm">{`${wpm}`}</span>
                </span>

                <span>
                    {` | ACC: `} &nbsp; <span className="acc">{`${acc}%`}</span>
                </span>
                <span>
                    {` | Error Rate: `} &nbsp;
                    <span className="error-rate">{`${
                        acc === '000.00'
                            ? '000.00'
                            : (100 - Number(acc)).toFixed(2)
                    }%`}</span>
                </span>
            </section>
        </>
    );
};
