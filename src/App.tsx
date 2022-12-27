import './css/App.css';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Keyboard } from './components/keyboard/Keyboard';

export const App = () => {
    return (
        <>
            <Header />
            <div className="app">
                <Main />
                <Keyboard />
            </div>
        </>
    );
};
