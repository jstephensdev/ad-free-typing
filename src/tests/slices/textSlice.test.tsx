import reducer, {
    TextState,
    TextMode,
    setText,
} from '../../store/slices/textSlice';

jest.mock('../../services/faker', () => {
    return {
        fakerText: jest.fn().mockReturnValue('fakerText'),
        fakerWords: jest.fn().mockReturnValue('fakerWords'),
        fakerAlphaNumeric: jest.fn().mockReturnValue('fak3rAlphaNum3ric'),
        fakerNumbers: jest.fn().mockReturnValue('1234 1234'),
    };
});

let state: TextState;

beforeEach(() => {
    state = {
        alphaNumeric: 'fak3rAlphaNum3ric',
        currentChar: 'f',
        incomingChars: 'akerWords',
        leftPadding: '',
        mode: TextMode.words,
        numbers: '1234 1234',
        outgoingChars: '',
        sentences: 'fakerText',
        text: 'fakerWords',
        typedChars: '',
        words: 'fakerWords',
    };
});

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(state);
});

test('should return the initial state with only the mode changed to numbers', () => {
    const initialState: TextState = state;
    expect(reducer(initialState, setText(TextMode.numbers))).toEqual({
        ...state,
        mode: 'Numbers',
        currentChar: '1',
        incomingChars: '234 1234',
        text: '1234 1234',
    });
});
