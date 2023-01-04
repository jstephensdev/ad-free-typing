import reducer, { setKey, KeyState } from '../../store/slices/keySlice';

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ value: '' });
});

test('should handle adding key to empty string', () => {
    const initialState: KeyState = { value: '' };

    expect(reducer(initialState, setKey('r'))).toEqual({ value: 'r' });
});

test('should be previous key should be overwritten by new key', () => {
    const initialState: KeyState = { value: 'r' };

    expect(reducer(initialState, setKey('s'))).toEqual({ value: 's' });
});
