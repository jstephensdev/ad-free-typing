import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import React from 'react';
import { RecentStats } from '../../components/RecentStats';
import { RecentStat } from '../../store/slices/statsSlice';
import { TextMode } from '../../store/slices/textSlice';

let fakeRecentStats: RecentStat[] = [];
const setup = () => {
  render(
    <Provider store={store}>
      <RecentStats recentStats={fakeRecentStats} />
    </Provider>
  );
};

setup();

afterEach(() => {
  fakeRecentStats = [];
  setup();
});

test('renders recentStats', () => {
  const completeARoundText = screen.getByText(/Complete a round/i);
  expect(completeARoundText).toBeInTheDocument();
});

test('renders sort by when there are more than 1 recent stat', () => {
  fakeRecentStats = [
    {
      mode: TextMode.phrases,
      duration: 'string',
      wpm: 'string',
      acc: 'string',
      errorRate: 'string',
      timeDateStamp: 'date'
    },
    {
      mode: TextMode.phrases,
      duration: 'string',
      wpm: 'string',
      acc: 'string',
      errorRate: 'string',
      timeDateStamp: 'date'
    }
  ];
  setup();
  const sortBy = screen.getByText(/Sort By/i);
  expect(sortBy).toBeInTheDocument();
});
