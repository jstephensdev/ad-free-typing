import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import React from 'react';
import { Stats } from '../../components/Stats';

beforeEach(() => {
    render(
        <Provider store={store}>
            <Stats />
        </Provider>
    );
});

test('renders duration, wpm, acc, and error rate', () => {
    const duration = screen.getByText(/duration/i);
    const wpm = screen.getByText(/wpm/i);
    const accuracy = screen.getByText(/acc/i);
    const errorRate = screen.getByText(/error rate/i);
    expect(duration).toBeInTheDocument();
    expect(wpm).toBeInTheDocument();
    expect(accuracy).toBeInTheDocument();
    expect(errorRate).toBeInTheDocument();
});
