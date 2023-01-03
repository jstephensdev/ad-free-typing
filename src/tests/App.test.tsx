import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import React from 'react';
import { App } from '../App';

test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const heading = screen.getByText(/Ad Free Typing/i);
    expect(heading).toBeInTheDocument();
});
