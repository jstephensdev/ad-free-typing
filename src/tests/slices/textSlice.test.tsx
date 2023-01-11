import reducer, {
    TextState,
    TextMode,
    setText,
    setIncomingChars,
    setCurrentChar,
    setOutgoingChars,
    setTypedChars,
} from '../../store/slices/textSlice';

let state: TextState;
let initialState: TextState;

beforeEach(() => {
    state = {
        alphaNumeric: 'fak3rAlphaNum3ric',
        currentChar: 'f',
        incomingChars: 'akerWords',
        mode: TextMode.words,
        numbers: '1234 1234',
        outgoingChars: '',
        sentences: 'fakerText',
        text: 'fakerWords',
        typedChars: '',
        words: 'fakerWords',
    };
    initialState = state;
});

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('setText should return the initial state per requested mode, currentChar, incomingChars, ant text', () => {
    expect(
        reducer(
            initialState,
            setText({ mode: TextMode.numbers, update: 'initialModeText' })
        )
    ).toEqual({
        ...state,
        mode: 'Numbers',
        currentChar: '1',
        incomingChars: '234 1234',
        text: '1234 1234',
    });
});

// test('setText should return new text per requested mode, currentChar, incomingChars, ant text', () => {
//     expect(reducer(initialState, setText({mode: TextMode.words, update: 'newText'}))).toEqual({
//         ...state,
//         mode: 'Numbers',
//         currentChar: '1',
//         incomingChars: '234 1234',
//         text: '1234 1234',
//     });
// });

test('setIncomingChars should return the initial state with mode, currentChar, incomingChars, ant text', () => {
    expect(reducer(initialState, setIncomingChars('test'))).toEqual({
        ...state,
        incomingChars: 'test',
    });
});

test('setCurrentChar should return the initial state with mode, currentChar, incomingChars, ant text', () => {
    expect(reducer(initialState, setCurrentChar('t'))).toEqual({
        ...state,
        currentChar: 't',
    });
});

test('setOutgoingChars should return the initial state with mode, currentChar, incomingChars, ant text', () => {
    expect(reducer(initialState, setOutgoingChars('e'))).toEqual({
        ...state,
        outgoingChars: 'e',
    });
});

test('setTypedChars should return the initial state with mode, currentChar, incomingChars, ant text', () => {
    expect(reducer(initialState, setTypedChars('s'))).toEqual({
        ...state,
        typedChars: 's',
    });
});
