import IonIcon from '@reacticons/ionicons';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { resetStats } from '../store/slices/statsSlice';
import { setText, TextMode } from '../store/slices/textSlice';
import { setUrl } from '../store/slices/routingSlice';

export const Header = () => {
    const dispatch = useAppDispatch();
    const mode: TextMode = useAppSelector((state) => state.text.mode);
    const pathname = useAppSelector((state) => state.routing.pathname);

    const updateText = () => {
        dispatch(resetStats());
        dispatch(setText(mode));
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
                        title="View Recent Stats"
                        className="ionIcon"
                        style={{ height: '1.6rem', width: '1.6rem' }}
                        name="stats-chart"
                        size="large"
                        data-testid="reset"
                        onClick={() =>
                            pathname === '/recentStats'
                                ? dispatch(setUrl('/'))
                                : dispatch(setUrl('/recentStats'))
                        }
                    />
                    <IonIcon
                        title="Options"
                        className="ionIcon"
                        name="options-outline"
                        size="large"
                        onClick={() =>
                            pathname === '/options'
                                ? dispatch(setUrl('/'))
                                : dispatch(setUrl('/options'))
                        }
                        data-testid="options"
                    />
                    <IonIcon
                        title="New Text & Stats Reset"
                        className="ionIcon"
                        name="arrow-back-circle-outline"
                        size="large"
                        onClick={() => updateText()}
                        data-testid="new-text-reset"
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
        </>
    );
};
