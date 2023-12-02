import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks';
import { resetStats } from '../store/slices/statsSlice';
import { setText, TextMode, modes } from '../store/slices/textSlice';
import { setUrl } from '../store/slices/routingSlice';

export const Options = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.text.mode);

  const radioOptionChange = (textMode: TextMode): void => {
    dispatch(resetStats());
    dispatch(setText(textMode));
    dispatch(setUrl('/'));
  };

  const renderRadioOption = (modes: TextMode[]): JSX.Element[] => {
    return modes.map((modeOption: TextMode) => (
      <label htmlFor={modeOption} key={modeOption}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
          <input
            style={{ margin: '10px' }}
            key={modeOption}
            data-testid={modeOption}
            aria-label={modeOption}
            type="checkbox"
            checked={mode === modeOption}
            onChange={() => radioOptionChange(modeOption)}
          />
          <span>{modeOption}</span>
        </div>
      </label>
    ));
  };

  return (
    <>
      <section>
        <section>{renderRadioOption(modes)}</section>
      </section>
    </>
  );
};
