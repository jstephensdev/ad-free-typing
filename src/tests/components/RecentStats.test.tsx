import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import React from 'react';
import { RecentStats } from '../../components/RecentStats';

const fakeRecentStats = [];
const setup = () => {
  render(
    <Provider store={store}>
      <RecentStats recentStats={fakeRecentStats} />
    </Provider>
  );
};

setup();

afterEach(() => {
  setup();
});

test('renders recentStats', () => {
  const newRoundIcon = screen.getByText(/New Round/i);
  expect(newRoundIcon).toBeInTheDocument();
});
