import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Keyboard } from '../../components/Keyboard/Keyboard';
import React from 'react';

jest.mock('../../hooks/useKeyDetection', () => ({
  useKeyDetection: () => ({
    downHandler: jest.fn(),
  }),
}));

const setup = () => {
  render(
    <Provider store={store}>
      <Keyboard />
    </Provider>
  );
};

setup();

afterEach(() => {
  setup();
});

test('renders keyboard q key', () => {
  const qKey = screen.getByText(/q/i);
  expect(qKey).toBeInTheDocument();
});
