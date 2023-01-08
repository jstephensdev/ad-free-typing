import { Header } from './components/Header';
import { Main } from './components/Main';
import { RecentStats } from './components/RecentStats';
import { useAppSelector } from './hooks/reduxHooks';

export const App = () => {
    const pathname = useAppSelector((state) => state.routing.pathname);
    return (
        <>
            <Header />
            <section className="app">
                {pathname === '/recentStats' ? <RecentStats /> : <Main />}
            </section>
        </>
    );
};
