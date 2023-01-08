import { Header } from './components/Header';
import { Main } from './components/Main';
import { RecentStats } from './components/RecentStats';
import { useAppSelector } from './hooks/reduxHooks';

export const App = () => {
    const pathname = useAppSelector((state) => state.routing.pathname);
    let component;

    if (pathname === '/') {
        component = <Main />;
    } else if (pathname === '/recentStats') {
        component = <RecentStats />;
    } else if (pathname === '/info') {
        component = <RecentStats />;
    } else {
        component = <div>404</div>;
    }
    return (
        <>
            <Header />
            <section className="app">{component}</section>
        </>
    );
};
