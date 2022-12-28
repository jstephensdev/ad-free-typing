import { Modal } from './Modal';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setText } from '../store/textSlice';

export const Header = () => {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState('');
    const checkedHard = useAppSelector(
        (state) => state.textSelection.easyOrHard
    );
    const dispatch = useAppDispatch();

    const handleCheckChange = () => {
        dispatch(setText(!checkedHard));
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
                        onClick={() => handleModalOpen('Easy or Hard:')}
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
                    checkedHard={checkedHard}
                />
            ) : (
                <></>
            )}
        </>
    );
};
