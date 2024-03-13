import { Stats } from './Stats';
import { Keyboard } from './Keyboard/Keyboard';
import { Text } from './Text';
import { TextMode } from '../store/slices/textSlice';
import { Options } from './Options';

export const Main = (): JSX.Element => {
  if (localStorage.getItem('textOption') === null) {
    localStorage.setItem('textOption', TextMode.words);
  }
  return (
    <>
      <Options />
      <Stats />
      <Text />
      <Keyboard />
    </>
  );
};
