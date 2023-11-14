import reducer, {
  StatState,
  setStartTime,
  setDuration,
  setWordCount,
  setWpm,
  setAcc,
  resetStats,
} from '../../store/slices/statsSlice';

let state: StatState;
let initialState: StatState;

beforeEach(() => {
  state = {
    startTime: 0,
    duration: '00.00',
    wordCount: 0,
    wpm: '00.00',
    acc: '000.00',
    errorRate: '000.00',
    recentStats: [],
  };
  initialState = state;
});

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('setStartTime should only set the startTime', () => {
  expect(reducer(initialState, setStartTime(1))).toEqual({
    ...state,
    startTime: 1,
  });
});

test('setDuration should only set the duration', () => {
  expect(reducer(initialState, setDuration('00.01'))).toEqual({
    ...state,
    duration: '00.01',
  });
});

test('setWordCount should only set the word count', () => {
  expect(reducer(initialState, setWordCount(1))).toEqual({
    ...state,
    wordCount: 1,
  });
});

test('set Wpm should only set the wpm', () => {
  expect(reducer(initialState, setWpm('25.00'))).toEqual({
    ...state,
    wpm: '25.00',
  });
});

test('setAcc should only set the acc', () => {
  expect(reducer(initialState, setAcc('100.00'))).toEqual({
    ...state,
    acc: '100.00',
  });
});

test('resetStats should reset stats to initialState', () => {
  const updatedState: StatState = {
    startTime: 23,
    duration: '20.00',
    wordCount: 45,
    wpm: '20.00',
    acc: '99.00',
    errorRate: '01.00',
    recentStats: [],
  };

  expect(reducer(updatedState, resetStats())).toEqual(initialState);
});
