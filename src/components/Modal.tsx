import IonIcon from '@reacticons/ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setText, setMode } from '../store/textSlice';

export const Modal = (props: any) => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.text.mode);
    const easyText = useAppSelector((state) => state.text.easy);
    const hardText = useAppSelector((state) => state.text.hard);
    const numericText = useAppSelector((state) => state.text.numbers);
    const alphaNumericText = useAppSelector(
        (state) => state.text.alphaNumerics
    );

    const handleCheckChange = (textMode: string) => {
        dispatch(setMode(textMode));
        if (textMode === 'hard') {
            dispatch(setText(hardText));
        } else if (textMode === 'easy') {
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
                    <a
                        href="#"
                        onClick={() =>
                            props.setOpenModal(
                                (openModal: boolean) => !openModal
                            )
                        }
                    >
                        <IonIcon
                            className="close"
                            name="close-outline"
                            size="large"
                        ></IonIcon>
                    </a>
                    {props.title === 'Settings:' ? (
                        <section className="setting-options">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={mode === 'easy'}
                                    onChange={() => handleCheckChange('easy')}
                                />
                                Easy
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
                                    checked={mode === 'hard'}
                                    onChange={() => handleCheckChange('hard')}
                                />
                                Hard
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
                                <li>Easy:</li>
                                <ul>
                                    <li>5 character Lorem Ipsum</li>
                                </ul>
                                <li>Numbers:</li>
                                <ul>
                                    <li>5 character number strings</li>
                                </ul>
                                <li>Hard:</li>
                                <ul>
                                    <li>
                                        words any length, capitalization, and
                                        periods.
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
