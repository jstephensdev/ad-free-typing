import { Keyboard } from './components/Keyboard';
import { Modal } from './components/Modal';
import IonIcon from '@reacticons/ionicons';
import './css/App.css';
import { useState } from 'react';

export const App = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <header className="app-header">
                <div>
                    <a
                        href="#"
                        onClick={() => setOpenModal((openModal) => !openModal)}
                    >
                        <IonIcon
                            name="information-circle-outline"
                            size="large"
                        />
                    </a>
                    <a
                        href="https://github.com/jstephensdev/ad-free-typing"
                        target="_blank"
                    >
                        <IonIcon name="logo-github" size="large" />
                    </a>
                </div>
                <h1>Ad Free Typing</h1>
                <a
                    href="#"
                    onClick={() => setOpenModal((openModal) => !openModal)}
                >
                    <IonIcon name="settings-outline" size="large" />
                </a>
            </header>
            <div className="app">{!openModal ? <Keyboard /> : <Modal />}</div>
        </>
    );
};
