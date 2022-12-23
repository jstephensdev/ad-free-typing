export const Stats = () => {
    const wpm = 'wpm';
    const successRate = 'success rate';
    const errorRate = 'error rate';
    return (
        <>
            <section className="stats-section">
                <p>{`WPM: ${wpm} | Acc: ${successRate} | Error Rate: ${errorRate}`}</p>
            </section>
        </>
    );
};
