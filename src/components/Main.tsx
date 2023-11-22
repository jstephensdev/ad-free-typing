import { Stats } from './Stats';
import { Keyboard } from './Keyboard/Keyboard';
import { Text } from './Text';
import { Options } from './Options';

export const Main = (): JSX.Element => {
  return (
    <>
      <Options />
      <Stats />
      <Text />
      <Keyboard />
    </>
  );
};
