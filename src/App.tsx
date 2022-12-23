import { Keyboard } from './components/Keyboard';
import { Stats } from './components/Stats';
import { Text } from './components/Text';

import './css/App.css';

export const App = () => {
    return (
        <div className="app">
            <header>
                <h1>Ad Free Typing</h1>
                <Stats />
                <Text />
                <Keyboard />
            </header>
        </div>
    );
};
