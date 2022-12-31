import IonIcon from '@reacticons/ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { resetStats } from '../store/statsSlice';
import { setText, setMode } from '../store/textSlice';

export const Modal = (props: any) => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.text.mode);
    const easyText = useAppSelector((state) => state.text.words);
    const hardText = useAppSelector((state) => state.text.sentences);
    const numericText = useAppSelector((state) => state.text.numbers);
    const alphaNumericText = useAppSelector(
        (state) => state.text.alphaNumerics
    );

    const handleCheckChange = (textMode: string) => {
        dispatch(setMode(textMode));
        dispatch(resetStats());
        if (textMode === 'sentences') {
            dispatch(setText(hardText));
        } else if (textMode === 'words') {
            dispatch(setText(easyText));
        } else if (textMode === 'numbers') {
            dispatch(setText(numericText));
        } else if (textMode === 'alphaNumeric') {
            dispatch(setText(alphaNumericText));
        }
        props.setOpenModal((openModal: boolean) => !openModal);
    };

    return (
        <>
            <section className="modal">
                <section className="text-section modal-content">
                    <div>
                        <IonIcon
                            className="close ionIcon"
                            name="close-outline"
                            size="large"
                            onClick={() =>
                                props.setOpenModal(
                                    (openModal: boolean) => !openModal
                                )
                            }
                        ></IonIcon>
                    </div>
                    {props.title === 'Settings:' ? (
                        <section className="setting-options">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={mode === 'words'}
                                    onChange={() => handleCheckChange('words')}
                                />
                                Words
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={mode === 'numbers'}
                                    onChange={() =>
                                        handleCheckChange('numbers')
                                    }
                                />
                                Numbers
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={mode === 'sentences'}
                                    onChange={() =>
                                        handleCheckChange('sentences')
                                    }
                                />
                                Sentences
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={mode === 'alphaNumeric'}
                                    onChange={() =>
                                        handleCheckChange('alphaNumeric')
                                    }
                                />
                                AlphaNumeric
                            </label>
                        </section>
                    ) : (
                        <section className="text-section">
                            <ul>
                                <li>Words:</li>
                                <ul>
                                    <li>5 character adjectives</li>
                                </ul>
                                <li>Numbers:</li>
                                <ul>
                                    <li>5 character number strings</li>
                                </ul>
                                <li>Sentences:</li>
                                <ul>
                                    <li>
                                        Lorem Ipsum words any length,
                                        capitalization, and periods.
                                    </li>
                                </ul>
                                <li>AlphaNumeric:</li>
                                <ul>
                                    <li>5 character letter and number mix</li>
                                </ul>
                            </ul>
                        </section>
                    )}
                </section>
            </section>
        </>
    );
};
