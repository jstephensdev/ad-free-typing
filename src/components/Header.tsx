import { Modal } from './Modal';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { resetStats } from '../store/slices/statsSlice';
import { setText, generateNewText, TextMode } from '../store/slices/textSlice';

export const Header = () => {
    const dispatch = useAppDispatch();
    const [openModal, setOpenModal] = useState(false);
    const mode: TextMode = useAppSelector((state) => state.text.mode);

    const handleModalOpen = () => {
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
                    <a
                        href="https://github.com/jstephensdev/ad-free-typing"
                        target="_blank"
                        rel="noreferrer"
                        className="ionIcon"
                        data-testid="github"
                    >
                        <IonIcon name="logo-github" size="large" />
                    </a>
                    <IonIcon
                        className="ionIcon"
                        name="settings-outline"
                        size="large"
                        onClick={() => handleModalOpen()}
                        data-testid="settings"
                    />
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
                </div>
            </header>
            {openModal ? <Modal setOpenModal={setOpenModal} /> : <></>}
        </>
    );
};
