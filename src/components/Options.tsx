import { useAppDispatch, useAppSelector } from '../hooks/useReduxHooks';
import { resetStats } from '../store/slices/statsSlice';
import { setText, TextMode, modes } from '../store/slices/textSlice';
import { setUrl } from '../store/slices/routingSlice';
import { Dropdown } from 'react-bootstrap';

export const Options = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.text.mode);

  const radioOptionChange = (textMode: TextMode): void => {
    dispatch(resetStats());
    dispatch(setText(textMode));
    dispatch(setUrl('/'));
  };

  const renderRadioOptions = (modes: TextMode[]): JSX.Element[] => {
    return modes.map((modeOption: TextMode) => (
      <Dropdown.Item key={modeOption} onClick={() => radioOptionChange(modeOption)}>
        {modeOption}
      </Dropdown.Item>
    ));
  };

  return (
   <div style={{border: '1px solid black', borderRadius: '25px'}}>
     <Dropdown role="menuitemcheckbox">
      <Dropdown.Toggle variant="none" id="dropdown-basic" style={{ border: '0px' }}>
        {mode}
      </Dropdown.Toggle>
      <Dropdown.Menu>{renderRadioOptions(modes)}</Dropdown.Menu>
    </Dropdown>
   </div>
  );
};
