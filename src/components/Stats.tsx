import ProgressBar from 'react-bootstrap/ProgressBar';
import { useAppSelector } from '../hooks/reduxHooks';
import { Timer } from './Timer';

export const Stats = () => {
    const wpm = useAppSelector((state) => state.stats.wpm);
    const acc = useAppSelector((state) => state.stats.acc);
    const text = useAppSelector((state) => state.text.text);
    const outgoingChars = useAppSelector((state) => state.text.outgoingChars);

    return (
        <>
            <section className="stats">
                <ProgressBar
                    variant="success"
                    now={(outgoingChars.length / text.length) * 100}
                />
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
