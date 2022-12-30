import './css/App.css';
import { Stats } from './components/Stats';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard/Keyboard';
import { Text } from './components/Text';

export const App = () => {
    return (
        <>
            <Header />
            <section className="app">
                <Stats />
                <Text />
                <Keyboard />
            </section>
        </>
    );
};
