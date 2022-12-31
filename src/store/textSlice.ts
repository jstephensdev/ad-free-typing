import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    fakerText,
    fakerWords,
    fakerAlphaNumeric,
    fakerNumbers,
} from '../services/faker';

interface TextState {
    words: string;
    numbers: string;
    sentences: string;
    alphaNumerics: string;
    mode: string;
    text: string;
    incomingChars: string;
    outgoingChars: string;
    currentChar: string;
    typedChars: string;
    leftPadding: string;
}

const initialText = fakerWords(5);

const initialState = {
    words: initialText,
    numbers: fakerNumbers(5),
    sentences: fakerText(),
    alphaNumerics: fakerAlphaNumeric(5),
    mode: 'easy',
    text: initialText,
    incomingChars: initialText.substring(1),
    outgoingChars: '',
    typedChars: '',
    currentChar: initialText.charAt(0),
    leftPadding: new Array(30).fill(' ').join(''),
} as TextState;

export const TextSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<string>) => {
            state.mode = action.payload;
        },
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
            state.incomingChars = action.payload.substring(1);
            state.outgoingChars = '';
            state.typedChars = '';
            state.currentChar = action.payload.charAt(0);
            state.leftPadding = new Array(30).fill(' ').join('');
        },
        setIncomingChars: (state, action: PayloadAction<string>) => {
            state.incomingChars = action.payload;
        },
        setCurrentChar: (state, action: PayloadAction<string>) => {
            state.currentChar = action.payload;
        },
        setOutgoingChars: (state, action: PayloadAction<string>) => {
            state.outgoingChars = action.payload;
        },
        setTypedChars: (state, action: PayloadAction<string>) => {
            state.typedChars = action.payload;
        },
        setLeftPadding: (state, action: PayloadAction<string>) => {
            state.leftPadding = action.payload;
        },
    },
});

export const {
    setMode,
    setText,
    setIncomingChars,
    setCurrentChar,
    setOutgoingChars,
    setTypedChars,
    setLeftPadding,
} = TextSlice.actions;

export default TextSlice.reducer;
