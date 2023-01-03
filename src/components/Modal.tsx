import IonIcon from '@reacticons/ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { resetStats } from '../store/slices/statsSlice';
import { setText, setMode, TextMode } from '../store/slices/textSlice';

export const Modal = (props: any) => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.text.mode);

    const handleCheckChange = (textMode: TextMode) => {
        dispatch(setMode(textMode));
        dispatch(resetStats());
        dispatch(setText(textMode));
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
                                    checked={mode === TextMode.words}
                                    onChange={() =>
                                        handleCheckChange(TextMode.words)
                                    }
                                />
                                Words
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={mode === TextMode.numbers}
                                    onChange={() =>
                                        handleCheckChange(TextMode.numbers)
                                    }
                                />
                                Numbers
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={mode === TextMode.sentences}
                                    onChange={() =>
                                        handleCheckChange(TextMode.sentences)
                                    }
                                />
                                Sentences
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={mode === TextMode.alphaNumeric}
                                    onChange={() =>
                                        handleCheckChange(TextMode.alphaNumeric)
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
