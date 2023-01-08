import IonIcon from '@reacticons/ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { RadioOption } from './RadioOption';
import { resetStats } from '../store/slices/statsSlice';
import { setText, setMode, TextMode, modes } from '../store/slices/textSlice';

export const OptionsModal = (props: { setOpenModal: any }) => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.text.mode);

    const radioOptionChange = (textMode: TextMode): void => {
        dispatch(setMode(textMode));
        dispatch(resetStats());
        dispatch(setText(textMode));
        props.setOpenModal((openModal: boolean) => !openModal);
    };

    const renderRadioOption = (modeOption: TextMode) => {
        return (
            <RadioOption
                key={modeOption}
                label={modeOption}
                checked={mode === modeOption}
                onChange={() => radioOptionChange(modeOption)}
            />
        );
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
                        {modes.map((modeOption: TextMode) =>
                            renderRadioOption(modeOption)
                        )}
                    </section>
                </section>
            </section>
        </>
    );
};
