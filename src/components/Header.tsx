import { Modal } from './Modal';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setText, setEasyOrHard } from '../store/textSlice';

export const Header = () => {
    const dispatch = useAppDispatch();
    const checked = useAppSelector((state) => state.textSelection.easyOrHard);
    const easyText = useAppSelector((state) => state.textSelection.easy);
    const hardText = useAppSelector((state) => state.textSelection.hard);
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState('');

    const handleCheckChange = () => {
        dispatch(setEasyOrHard(!checked));
        if (!checked) {
            dispatch(setText(hardText));
        } else {
            dispatch(setText(easyText));
        }
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
                    checked={checked}
                    handleCheckChange={handleCheckChange}
                />
            ) : (
                <></>
            )}
        </>
    );
};
