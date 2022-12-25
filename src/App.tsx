import { Keyboard } from './components/Keyboard';
import IonIcon from '@reacticons/ionicons';
import './css/App.css';

export const App = () => {
    return (
        <>
            <header className="app-header">
                <div>
                    <IonIcon name="help-circle-outline" size="large" />
                    <a
                        href="https://github.com/jstephensdev/ad-free-typing"
                        target="_blank"
                    >
                        <IonIcon name="logo-github" size="large" />
                    </a>
                </div>
                <h1>Ad Free Typing</h1>
                <IonIcon name="settings-outline" size="large" />
            </header>
            <div className="app">
                <Keyboard />
            </div>
        </>
    );
};
