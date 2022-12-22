import { Keyboard } from './components/Keyboard';
import { Stats } from './components/Stats';
import './css/App.css';

export const App = () => {
    return (
        <div className="app">
            <header>
                <h1>Ad Free Typing</h1>
                <Stats />
                <section className="typing-text-section">
                    <p>What to practice typing</p>
                </section>
                <Keyboard />
            </header>
        </div>
    );
};
