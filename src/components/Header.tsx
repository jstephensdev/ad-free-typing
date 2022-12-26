import { Modal } from './Modal';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

export const Header = () => {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState('');
    const [checkedEasy, setCheckedEasy] = useState(true);
    const [checkedHard, setCheckedHard] = useState(false);

    const handleCheckChange = () => {
        setCheckedEasy(!checkedEasy);
        setCheckedHard(!checkedHard);
        setOpenModal((openModal) => !openModal);
    };

    const handleModalOpen = (title: string) => {
        setTitle(title);
        setOpenModal((openModal) => !openModal);
    };
    return (
        <>
            <header className="app-header">
                <div>
                    <a
                        href="#"
                        rel="noreferrer"
                        onClick={() => handleModalOpen('Info:')}
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
                    onClick={() => handleModalOpen('Settings:')}
                >
                    <IonIcon name="settings-outline" size="large" />
                </a>
            </header>
            {openModal ? (
                <Modal
                    title={title}
                    setOpenModal={setOpenModal}
                    handleCheckChange={handleCheckChange}
                    checkedEasy={checkedEasy}
                    checkedHard={checkedHard}
                />
            ) : (
                <></>
            )}
        </>
    );
};
