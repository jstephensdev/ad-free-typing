import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import React from 'react';
import { RecentStats } from '../../components/RecentStats';

const fakeRecentStats = [];
beforeEach(() => {
  render(
    <Provider store={store}>
      <RecentStats recentStats={fakeRecentStats} />
    </Provider>
  );
});

test('renders recentStats', () => {
  const newRoundIcon = screen.getByText(/New Round/i);
  expect(newRoundIcon).toBeInTheDocument();
});
