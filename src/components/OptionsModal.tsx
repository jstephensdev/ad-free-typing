import IonIcon from '@reacticons/ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { resetStats } from '../store/slices/statsSlice';
import { setText, TextMode, modes } from '../store/slices/textSlice';
import { setUrl } from '../store/slices/routingSlice';

interface Props {
    setOpenModal: any;
}

export const OptionsModal = ({ setOpenModal }: Props): JSX.Element => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.text.mode);

    const radioOptionChange = (textMode: TextMode): void => {
        dispatch(resetStats());
        dispatch(setText({ mode: textMode, update: 'initialModeText' }));
        setOpenModal((openModal: boolean) => !openModal);
        dispatch(setUrl('/'));
    };

    const renderRadioOption = (modes: TextMode[]): JSX.Element[] => {
        return modes.map((modeOption: TextMode) => (
            <label htmlFor={modeOption} key={modeOption}>
                <input
                    key={modeOption}
                    data-testid={modeOption}
                    aria-label={modeOption}
                    type="radio"
                    checked={mode === modeOption}
                    onChange={() => radioOptionChange(modeOption)}
                />
                {modeOption}
            </label>
        ));
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
                                setOpenModal((openModal: boolean) => !openModal)
                            }
                        ></IonIcon>
                    </div>
                    <section className="options">
                        {renderRadioOption(modes)}
                    </section>
                </section>
            </section>
        </>
    );
};
