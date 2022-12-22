import { Keyboard } from './components/Keyboard';
import './css/App.css';

export const App = () => {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Ad Free Typing</h1>
                <section className="stats-section">
                    <table>
                        <tr className="stats-row">
                            <td>WPM</td>
                            <td>Error Rate</td>
                            <td>Success Rate</td>
                        </tr>

                        <tr className="stats-row">
                            <td>TBD</td>
                            <td>TBD</td>
                            <td>TBD</td>
                        </tr>
                    </table>
                </section>
                <section className="typing-text-section">
                    <p>What to practice typing</p>
                </section>
                <Keyboard />
            </header>
        </div>
    );
};
