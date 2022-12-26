import { Modal } from './Modal';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

export const Header = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <header className="app-header">
                <div>
                    <a
                        href="#"
                        rel="noreferrer"
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
                        rel="noreferrer"
                    >
                        <IonIcon name="logo-github" size="large" />
                    </a>
                </div>
                <h1>Ad Free Typing</h1>
                <a
                    href="#"
                    rel="noreferrer"
                    onClick={() => setOpenModal((openModal) => !openModal)}
                >
                    <IonIcon name="settings-outline" size="large" />
                </a>
            </header>
            {openModal ? <Modal /> : <></>}
        </>
    );
};
