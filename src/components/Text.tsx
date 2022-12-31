import { useAppSelector } from '../hooks/reduxHooks';

export const Text = () => {
    const incomingChars = useAppSelector((state) => state.text.incomingChars);
    const outgoingChars = useAppSelector((state) => state.text.outgoingChars);
    const currentChar = useAppSelector((state) => state.text.currentChar);
    const leftPadding = useAppSelector((state) => state.text.leftPadding);

    return (
        <>
            <section className="text-section">
                <p>
                    <span className="character-out">
                        {(leftPadding + outgoingChars).slice(-30)}
                    </span>
                    <span className="character-current">{currentChar}</span>
                    <span>{incomingChars.substring(0, 30)}</span>
                </p>
            </section>
        </>
    );
};
