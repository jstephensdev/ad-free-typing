import { Modal } from './Modal';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { resetStats } from '../store/slices/statsSlice';
import { setText, generateNewText } from '../store/slices/textSlice';

export const Header = () => {
    const dispatch = useAppDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState('');
    const mode: string = useAppSelector((state) => state.text.mode);

    const handleModalOpen = (title: string) => {
        setTitle(title);
        setOpenModal((openModal) => !openModal);
    };

    const handleReset = () => {
        dispatch(resetStats());
        dispatch(setText(mode));
    };

    const newText = () => {
        dispatch(resetStats());
        dispatch(generateNewText(mode));
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
                        data-testid="info"
                    />
                    <a
                        href="https://github.com/jstephensdev/ad-free-typing"
                        target="_blank"
                        rel="noreferrer"
                        className="ionIcon"
                        data-testid="github"
                    >
                        <IonIcon name="logo-github" size="large" />
                    </a>
                </div>
                <h1>Ad Free Typing</h1>
                <div>
                    <IonIcon
                        className="ionIcon"
                        name="refresh-outline"
                        size="large"
                        onClick={() => newText()}
                        data-testid="get-new-text"
                    />
                    <IonIcon
                        className="ionIcon"
                        name="refresh-circle-outline"
                        size="large"
                        onClick={() => handleReset()}
                        data-testid="reset"
                    />
                    <IonIcon
                        className="ionIcon"
                        name="settings-outline"
                        size="large"
                        onClick={() => handleModalOpen('Settings:')}
                        data-testid="settings"
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
