import reducer, {
    StartTimeState,
    setStartTime,
} from '../../store/slices/statsSlice';

const state = {
    startTime: 0,
    duration: '00.00',
    wordCount: 0,
    wpm: '00.00',
    acc: '000.00',
    errorRate: '000.00',
};

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(state);
});

test('should only set the startTime', () => {
    const initialState: StartTimeState = state;

    expect(reducer(initialState, setStartTime(1))).toEqual({
        startTime: 1,
        duration: '00.00',
        wordCount: 0,
        wpm: '00.00',
        acc: '000.00',
        errorRate: '000.00',
    });
});
