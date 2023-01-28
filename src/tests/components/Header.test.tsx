import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Header } from '../../components/Header';
import React from 'react';

beforeEach(() => {
    render(
        <Provider store={store}>
            <Header />
        </Provider>
    );
});

test('renders ad free typing heading', () => {
    const heading = screen.getByText(/Ad Free Typing/i);
    expect(heading).toBeInTheDocument();
});

test('renders github icon link', () => {
    const heading = screen.getByTestId('github');
    expect(heading).toBeInTheDocument();
});

test('renders start over outline icon', () => {
    const heading = screen.getByTestId('new-round');
    expect(heading).toBeInTheDocument();
});

test('renders options icon link', () => {
    const heading = screen.getByTestId('options');
    expect(heading).toBeInTheDocument();
});
