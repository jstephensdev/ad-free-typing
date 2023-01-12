import { RecentStat } from '../store/slices/statsSlice';

interface Props {
    recentStats: RecentStat[];
}

export const RecentStats = ({ recentStats }: Props) => {
    return (
        <>
            <section className="text-section">
                <h6>Recent Rounds</h6>
                {recentStats.length ? (
                    recentStats.map((stat, index) => (
                        <section className="recentstats" key={index}>
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
