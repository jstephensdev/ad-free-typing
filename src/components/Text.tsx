import { useAppSelector } from '../hooks/reduxHooks';

export const Text = () => {
    const incomingChars = useAppSelector((state) => state.text.incomingChars);
    const outgoingChars = useAppSelector((state) => state.text.outgoingChars);
    const currentChar = useAppSelector((state) => state.text.currentChar);

    return (
        <>
            <section className="text-section">
                <p>
                    <span className="character-out">
                        {outgoingChars.slice(-24)}
                    </span>
                    <span className="character-current">{currentChar}</span>
                    <span>{incomingChars.substring(0, 24)}</span>
                </p>
            </section>
        </>
    );
};
