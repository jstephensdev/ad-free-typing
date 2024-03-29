import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Header } from '../../components/Header';
import React from 'react';
const setup = () =>
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

setup();

afterEach(() => {
  setup();
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
