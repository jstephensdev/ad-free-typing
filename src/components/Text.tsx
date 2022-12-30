import { useAppSelector } from '../hooks/reduxHooks';

export const Text = () => {
    const incomingChars = useAppSelector(
        (state) => state.textSelection.incomingChars
    );
    const outgoingChars = useAppSelector(
        (state) => state.textSelection.outgoingChars
    );
    const currentChar = useAppSelector(
        (state) => state.textSelection.currentChar
    );
    const leftPadding = useAppSelector(
        (state) => state.textSelection.leftPadding
    );

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
