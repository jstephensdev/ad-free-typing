import { Modal } from './Modal';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { resetStats } from '../store/statsSlice';
import { setText } from '../store/textSlice';
import {
    fakerAlphaNumeric,
    fakerNumbers,
    fakerText,
    fakerWords,
} from '../services/faker';

export const Header = () => {
    const dispatch = useAppDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState('');
    const mode = useAppSelector((state) => state.text.mode);
    const easyText = useAppSelector((state) => state.text.words);
    const hardText = useAppSelector((state) => state.text.sentences);
    const numericText = useAppSelector((state) => state.text.numbers);
    const alphaNumericText = useAppSelector(
        (state) => state.text.alphaNumerics
    );

    const handleModalOpen = (title: string) => {
        setTitle(title);
        setOpenModal((openModal) => !openModal);
    };

    const handleReset = () => {
        dispatch(resetStats());
        if (mode === 'hard') {
            dispatch(setText(hardText));
        } else if (mode === 'easy') {
            dispatch(setText(easyText));
        } else if (mode === 'numbers') {
            dispatch(setText(numericText));
        } else if (mode === 'alphaNumeric') {
            dispatch(setText(alphaNumericText));
        }
    };

    const generateNewText = () => {
        dispatch(resetStats());
        if (mode === 'hard') {
            dispatch(setText(fakerText()));
        } else if (mode === 'easy') {
            dispatch(setText(fakerWords(5)));
        } else if (mode === 'numbers') {
            dispatch(setText(fakerNumbers(5)));
        } else if (mode === 'alphaNumeric') {
            dispatch(setText(fakerAlphaNumeric(5)));
        }
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
                        name="refresh-outline"
                        size="large"
                        onClick={() => generateNewText()}
                    />
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
