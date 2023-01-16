import { Header } from './components/Header';
import { Main } from './components/Main';
import { Options } from './components/Options';
import { RecentStats } from './components/RecentStats';
import ErrorBoundary from './components/ErrorBoundary';
import { useAppSelector } from './hooks/reduxHooks';

export const App = () => {
    const pathname = useAppSelector((state) => state.routing.pathname);

    const recentStats = useAppSelector((state) => state.stats.recentStats);
    let component;

    if (pathname === '/') {
        component = <Main />;
    } else if (pathname === '/recentStats') {
        component = <RecentStats recentStats={recentStats} />;
    } else if (pathname === '/options') {
        component = <Options />;
    } else {
        component = <div>404</div>;
    }
    return (
        <>
            <ErrorBoundary>
                <Header />
                <section className="app">{component}</section>
            </ErrorBoundary>
        </>
    );
};
