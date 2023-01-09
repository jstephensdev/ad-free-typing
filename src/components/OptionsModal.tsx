import IonIcon from '@reacticons/ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { resetStats } from '../store/slices/statsSlice';
import { setText, TextMode, modes } from '../store/slices/textSlice';
import { setUrl } from '../store/slices/routingSlice';

export const OptionsModal = (props: { setOpenModal: any }) => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.text.mode);

    const radioOptionChange = (textMode: TextMode): void => {
        dispatch(resetStats());
        dispatch(setText(textMode));
        props.setOpenModal((openModal: boolean) => !openModal);
        dispatch(setUrl('/'));
    };

    const renderRadioOption = (modeOption: TextMode) => {
        return (
            <label key={modeOption}>
                <input
                    key={modeOption}
                    data-testid={modeOption}
                    type="radio"
                    checked={mode === modeOption}
                    onChange={() => radioOptionChange(modeOption)}
                />
                {modeOption}
            </label>
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
                    <section className="options">
                        {modes.map((modeOption: TextMode) =>
                            renderRadioOption(modeOption)
                        )}
                    </section>
                </section>
            </section>
        </>
    );
};
