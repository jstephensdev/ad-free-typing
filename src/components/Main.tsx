import { Stats } from './Stats';
import { Keyboard } from './Keyboard/Keyboard';
import { Text } from './Text';
import { Options } from './Options';
import { TextMode } from '../store/slices/textSlice';

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
