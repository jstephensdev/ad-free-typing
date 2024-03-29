import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { App } from '../App';
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

test('renders App with correct path', () => {
    render(
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    );
    expect(store.getState().routing.pathname).toBe('/');
    const heading = screen.getByText(/Ad Free Typing/i);
    expect(heading).toBeInTheDocument();
});
