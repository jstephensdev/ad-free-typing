import IonIcon from '@reacticons/ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setUrl } from '../store/slices/routingSlice';
import {
    RecentStat,
    removeAllStats,
    resetStats,
} from '../store/slices/statsSlice';
import { setText, TextMode } from '../store/slices/textSlice';

interface Props {
    recentStats: RecentStat[];
}

export const RecentStats = ({ recentStats }: Props) => {
    const dispatch = useAppDispatch();
    const mode: TextMode = useAppSelector((state) => state.text.mode);

    const updateText = () => {
        dispatch(resetStats());
        dispatch(setText(mode));
        dispatch(setUrl('/'));
    };

    return (
        <>
            <section>
                <div>
                    <h6>Rounds (12 Most Recent)</h6>
                    <IonIcon
                        title="Next Round"
                        className="ionIcon"
                        name="arrow-back-circle-outline"
                        size="large"
                        onClick={() => updateText()}
                        data-testid="new-text-reset"
                    />
                </div>
                {recentStats?.length ? (
                    recentStats.map((stat, index) => (
                        <section
                            className="recentstats"
                            style={{ fontSize: '30px' }}
                            key={index}
                        >
                            <span className="mode">{stat.mode}</span>
                            <span> | Duration: </span>
                            <span className="duration">{stat.duration}</span>
                            <span> | WPM: </span>
                            <span className="wpm">{stat.wpm}</span>
                            <span> | ACC: </span>
                            <span className="acc">{stat.acc}%</span>
                            <span> | Error Rate: </span>
                            <span className="error-rate">
                                {stat.errorRate}%
                            </span>
                        </section>
                    ))
                ) : (
                    <>
                        <p>Complete a Round</p>
                    </>
                )}
                {recentStats?.length ? (
                    <IonIcon
                        title="Clear All Rounds"
                        className="ionIcon"
                        name="close-circle-outline"
                        size="large"
                        data-testid="reset"
                        onClick={() => dispatch(removeAllStats())}
                    />
                ) : (
                    <></>
                )}
            </section>
        </>
    );
};
