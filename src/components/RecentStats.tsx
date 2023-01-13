import IonIcon from '@reacticons/ionicons';
import { useAppDispatch } from '../hooks/reduxHooks';
import { RecentStat, removeAllStats } from '../store/slices/statsSlice';

interface Props {
    recentStats: RecentStat[];
}

export const RecentStats = ({ recentStats }: Props) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <section>
                <div>
                    <h6>Recent Rounds</h6>
                    <IonIcon
                        title="clear all stat rounds"
                        className="ionIcon"
                        name="close-circle-outline"
                        size="large"
                        data-testid="reset"
                        onClick={() => dispatch(removeAllStats())}
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
            </section>
        </>
    );
};
