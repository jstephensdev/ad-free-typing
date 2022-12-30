import { Timer } from './Timer';

export const Stats = (props: any) => {
    const wpm = props.wpm;
    const accuracy = props.accuracy;

    return (
        <>
            <section className="stats">
                <span>{`Duration: `}</span>
                <Timer />
                <span>{` | WPM: `}</span>
                <span className="wpm">{`${wpm}`}</span>
                <span>{` | ACC: `}</span>
                <span className="acc">{`${accuracy}%`}</span>
                <span>{` | Error Rate: `}</span>
                <span className="error-rate">{`${
                    accuracy === '000.00'
                        ? '000.00'
                        : (100 - Number(accuracy)).toFixed(2)
                }%`}</span>
            </section>
        </>
    );
};
