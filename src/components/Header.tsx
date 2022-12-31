import { Modal } from './Modal';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

export const Header = () => {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState('');

    const handleModalOpen = (title: string) => {
        setTitle(title);
        setOpenModal((openModal) => !openModal);
    };

    const handleReset = () => {
        console.log('todo: reset functionality');
    };
    return (
        <>
            <header className="app-header">
                <div>
                    <IonIcon
                        className="ionIcon"
                        name="information-circle-outline"
                        size="large"
                        onClick={() => handleModalOpen('Easy or Hard:')}
                    />

                    <a
                        href="https://github.com/jstephensdev/ad-free-typing"
                        target="_blank"
                        rel="noreferrer"
                        className="ionIcon"
                    >
                        <IonIcon name="logo-github" size="large" />
                    </a>
                </div>
                <h1>Ad Free Typing</h1>
                <div>
                    <IonIcon
                        className="ionIcon"
                        name="refresh-circle-outline"
                        size="large"
                        onClick={() => handleReset()}
                    />

                    <IonIcon
                        className="ionIcon"
                        name="settings-outline"
                        size="large"
                        onClick={() => handleModalOpen('Settings:')}
                    />
                </div>
            </header>
            {openModal ? (
                <Modal title={title} setOpenModal={setOpenModal} />
            ) : (
                <></>
            )}
        </>
    );
};
