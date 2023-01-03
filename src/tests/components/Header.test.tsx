import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import React from 'react';
import { Header } from '../../components/Header';

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

test('renders info icon link', () => {
    const heading = screen.getByTestId('info');
    expect(heading).toBeInTheDocument();
});

test('renders github icon link', () => {
    const heading = screen.getByTestId('github');
    expect(heading).toBeInTheDocument();
});

test('renders get new text refresh outline icon', () => {
    const heading = screen.getByTestId('get-new-text');
    expect(heading).toBeInTheDocument();
});

test('renders reset icon link', () => {
    const heading = screen.getByTestId('reset');
    expect(heading).toBeInTheDocument();
});

test('renders settings icon link', () => {
    const heading = screen.getByTestId('settings');
    expect(heading).toBeInTheDocument();
});
