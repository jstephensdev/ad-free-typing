import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useAppSelector } from '../hooks/useReduxHooks';
import { Timer } from './Timer';

export const Stats = (): JSX.Element => {
    const wpm = useAppSelector((state) => state.stats.wpm);
    const acc = useAppSelector((state) => state.stats.acc);
    const text = useAppSelector((state) => state.text.text);
    const outgoingChars = useAppSelector((state) => state.text.outgoingChars);
    const [show, setShow] = useState(true);

    return (
        <>
            <section className="stats">
                <div style={{ marginBottom: '10px' }}>
                    {show ? (
                        <>
                            <span>
                                {`Duration: `} &nbsp; <Timer />
                            </span>

                            <span>
                                {` | WPM:`} &nbsp;
                                <span className="wpm">{`${wpm}`}</span>
                            </span>

                            <span>
                                {` | ACC: `} &nbsp;
                                <span className="acc">{`${acc}%`}</span>
                            </span>
                            <span>
                                {` | Error Rate: `} &nbsp;
                                <span className="error-rate">{`${
                                    acc === '000.00'
                                        ? '000.00'
                                        : (100 - Number(acc)).toFixed(2)
                                }%`}</span>
                            </span>
                        </>
                    ) : (
                        <div className="space"></div>
                    )}
                    <IonIcon
                        title={
                            show ? 'Hide Current Stats' : 'Show Current Stats'
                        }
                        className="ionIcon"
                        name={
                            show
                                ? 'chevron-back-outline'
                                : 'chevron-forward-outline'
                        }
                        size="large"
                        data-testid="reset"
                        onClick={() => setShow(!show)}
                    />
                </div>
                <ProgressBar
                    variant="success"
                    now={(outgoingChars.length / text.length) * 100}
                />
            </section>
        </>
    );
};
