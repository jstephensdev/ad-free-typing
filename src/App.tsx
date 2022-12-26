import { Keyboard } from './components/Keyboard';
import { Header } from './components/Header';
import './css/App.css';

export const App = () => {
    return (
        <>
            <Header />
            <div className="app">
                <Keyboard />
            </div>
        </>
    );
};
