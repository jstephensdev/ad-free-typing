import reducer, {
    StartTimeState,
    setStartTime,
    setDuration,
    setWordCount,
    setWpm,
    setAcc,
    resetStats,
} from '../../store/slices/statsSlice';

let state: StartTimeState;

beforeEach(() => {
    state = {
        startTime: 0,
        duration: '00.00',
        wordCount: 0,
        wpm: '00.00',
        acc: '000.00',
        errorRate: '000.00',
    };
});

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(state);
});

test('should only set the startTime', () => {
    const initialState: StartTimeState = state;

    expect(reducer(initialState, setStartTime(1))).toEqual({
        ...state,
        startTime: 1,
    });
});

test('should only set the duration', () => {
    const initialState: StartTimeState = state;

    expect(reducer(initialState, setDuration('00.01'))).toEqual({
        ...state,
        duration: '00.01',
    });
});

test('should only set the word count', () => {
    const initialState: StartTimeState = state;

    expect(reducer(initialState, setWordCount(1))).toEqual({
        ...state,
        wordCount: 1,
    });
});

test('should only set the wpm', () => {
    const initialState: StartTimeState = state;

    expect(reducer(initialState, setWpm('25.00'))).toEqual({
        ...state,
        wpm: '25.00',
    });
});

test('should only set the acc', () => {
    const initialState: StartTimeState = state;

    expect(reducer(initialState, setAcc('100.00'))).toEqual({
        ...state,
        acc: '100.00',
    });
});

test('should reset stats to initialState', () => {
    const initialState: StartTimeState = state;

    const updatedState: StartTimeState = {
        startTime: 23,
        duration: '20.00',
        wordCount: 45,
        wpm: '20.00',
        acc: '99.00',
        errorRate: '01.00',
    };

    expect(reducer(updatedState, resetStats())).toEqual(initialState);
});
