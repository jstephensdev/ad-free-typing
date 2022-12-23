import { Keyboard } from './components/Keyboard';
import './css/App.css';

export const App = () => {
    return (
        <div className="app">
            <header>
                <h1>Ad Free Typing</h1>
                <Keyboard />
            </header>
        </div>
    );
};
