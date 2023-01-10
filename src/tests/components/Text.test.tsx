import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import React from 'react';
import { Text } from '../../components/Text';

beforeEach(() => {
    render(
        <Provider store={store}>
            <Text />
        </Provider>
    );
});

test('renders current char', () => {
    const currentChar = screen.getByLabelText('f');
    expect(currentChar).toBeInTheDocument();
});

test('renders outgoing char', () => {
    const outgoingChars = screen.getByLabelText('akerWords');
    expect(outgoingChars).toBeInTheDocument();
});

test('renders incoming char', () => {
    const incomingChars = screen.getByLabelText('');
    expect(incomingChars).toBeInTheDocument();
});
