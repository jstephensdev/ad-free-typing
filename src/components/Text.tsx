import { useAppSelector } from '../hooks/useReduxHooks';

export const Text = () => {
    const incomingChars = useAppSelector((state) => state.text.incomingChars);
    const outgoingChars = useAppSelector((state) => state.text.outgoingChars);
    const currentChar = useAppSelector((state) => state.text.currentChar);

    return (
        <>
            <section className="text-section">
                <p>
                    <span aria-label={outgoingChars} className="character-out">
                        {outgoingChars.slice(-24)}
                    </span>
                    <span
                        aria-label={currentChar}
                        className="character-current"
                    >
                        {currentChar}
                    </span>
                    <span aria-label={incomingChars}>
                        {incomingChars.substring(0, 24)}
                    </span>
                </p>
            </section>
        </>
    );
};
