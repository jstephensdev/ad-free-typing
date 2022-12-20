import { Keyboard } from './components/Keyboard';
import './css/App.css';

export const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>Ad Free Typing</p>
                <Keyboard />
            </header>
        </div>
    );
};
