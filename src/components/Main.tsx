import { Stats } from './Stats';
import { Keyboard } from './Keyboard/Keyboard';
import { Text } from './Text';

export const Main = (): JSX.Element => {
    return (
        <>
            <Stats />
            <Text />
            <Keyboard />
        </>
    );
};
