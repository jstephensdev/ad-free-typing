import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import React from 'react';
import { RadioOption } from '../../components/RadioOption';
import '@testing-library/jest-dom';


const onChange = jest.fn();

beforeEach(() => {
    render(
        <Provider store={store}>
            <RadioOption label="test" checked={true} onChange={onChange} />
        </Provider>
    );
});

test('renders ad free typing heading', () => {
    const label = screen.getByText(/test/i);
    expect(label).toBeInTheDocument();
});
