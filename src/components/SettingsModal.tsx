import IonIcon from '@reacticons/ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { Checkbox } from './CheckBox';
import { resetStats } from '../store/slices/statsSlice';
import { setText, setMode, TextMode } from '../store/slices/textSlice';

export const SettingsModal = (props: { setOpenModal: any }) => {
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
                    <section className="setting-options">
                        <Checkbox
                            label="words"
                            checked={mode === TextMode.words}
                            onChange={() => handleCheckChange(TextMode.words)}
                        />
                        <Checkbox
                            label="numbers"
                            checked={mode === TextMode.numbers}
                            onChange={() => handleCheckChange(TextMode.numbers)}
                        />
                        <Checkbox
                            label="sentences"
                            checked={mode === TextMode.sentences}
                            onChange={() =>
                                handleCheckChange(TextMode.sentences)
                            }
                        />
                        <Checkbox
                            label="alphaNumeric"
                            checked={mode === TextMode.alphaNumeric}
                            onChange={() =>
                                handleCheckChange(TextMode.alphaNumeric)
                            }
                        />
                    </section>
                </section>
            </section>
        </>
    );
};
