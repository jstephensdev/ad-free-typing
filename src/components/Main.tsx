import { Stats } from './Stats';
import { Keyboard } from './Keyboard/Keyboard';
import { Text } from './Text';

export const Main = () => {
    return (
        <>
            <section className="app">
                <Stats />
                <Text />
                <Keyboard />
            </section>
        </>
    );
};
