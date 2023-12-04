import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import React from 'react';
import { Options } from '../../components/Options';

const setup = () => {
  render(
    <Provider store={store}>
      <Options />
    </Provider>
  );
};

setup();

afterEach(() => {
  setup();
});

test('renders options', () => {
  const words = screen.getByText(/Words/i);
  const numbers = screen.getByText(/Numbers/i);
  const sentences = screen.getByText(/Lorem Ipsum Sentences/i);
  const alphaNumeric = screen.getByText(/Alphanumeric/i);
  expect(words).toBeInTheDocument();
  expect(numbers).toBeInTheDocument();
  expect(sentences).toBeInTheDocument();
  expect(alphaNumeric).toBeInTheDocument();
});
