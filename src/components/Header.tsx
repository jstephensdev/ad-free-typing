import { OptionsModal } from './OptionsModal';
import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { resetStats } from '../store/slices/statsSlice';
import { setText, TextMode } from '../store/slices/textSlice';
import { setUrl } from '../store/slices/routingSlice';

export const Header = () => {
    const dispatch = useAppDispatch();
    const [openModal, setOpenModal] = useState(false);
    const mode: TextMode = useAppSelector((state) => state.text.mode);
    const pathname = useAppSelector((state) => state.routing.pathname);

    const updateText = (update: string) => {
        dispatch(resetStats());
        dispatch(setText({ mode: mode, update: update }));
        dispatch(setUrl('/'));
    };

    return (
        <>
            <header className="app-header">
                <span className="title" onClick={() => dispatch(setUrl('/'))}>
                    Ad Free Typing
                </span>
                <div>
                    <IonIcon
                        title="More Information"
                        className="ionIcon"
                        name="help-circle"
                        size="large"
                        data-testid="info"
                        onClick={() =>
                            pathname === '/' || pathname === '/recentStats'
                                ? dispatch(setUrl('/info'))
                                : dispatch(setUrl('/'))
                        }
                    />
                    <IonIcon
                        title="View Recent Stats"
                        className="ionIcon"
                        name="stats-chart"
                        size="large"
                        data-testid="reset"
                        onClick={() =>
                            pathname === '/' || pathname === '/info'
                                ? dispatch(setUrl('/recentStats'))
                                : dispatch(setUrl('/'))
                        }
                    />
                    <IonIcon
                        title="Options"
                        className="ionIcon"
                        name="options-outline"
                        size="large"
                        onClick={() => setOpenModal((openModal) => !openModal)}
                        data-testid="options"
                    />
                    <IonIcon
                        title="New Text & Stats Reset"
                        className="ionIcon"
                        name="add-circle-outline"
                        size="large"
                        onClick={() => updateText('newText')}
                        data-testid="new-text-reset"
                    />
                    <IonIcon
                        title="Current Text & Stats Reset"
                        className="ionIcon"
                        name="refresh-circle-outline"
                        size="large"
                        onClick={() => updateText('initialModeText')}
                        data-testid="current-text-reset"
                    />
                    <a
                        href="https://github.com/jstephensdev/ad-free-typing"
                        target="_blank"
                        rel="noreferrer"
                        className="ionIcon"
                        data-testid="github"
                    >
                        <IonIcon
                            title="Github Repo Link"
                            name="logo-github"
                            size="large"
                        />
                    </a>
                </div>
            </header>
            {openModal ? <OptionsModal setOpenModal={setOpenModal} /> : <></>}
        </>
    );
};
