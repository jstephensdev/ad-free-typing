import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import {
    fakerText,
    fakerWords,
    fakerAlphaNumeric,
    fakerNumbers,
} from '../services/faker';

interface TextState {
    easy: string;
    numbers: string;
    hard: string;
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
    easy: fakerWords(5),
    numbers: fakerNumbers(5),
    hard: fakerText(),
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

export const selectEasyText = (state: RootState) => state.text.easy;
export const selectHardText = (state: RootState) => state.text.hard;
export const selectNumbersText = (state: RootState) =>
    state.text.numbers;
export const selectAlphaNumericText = (state: RootState) =>
    state.text.alphaNumerics;
export const mode = (state: RootState) => state.text.mode;
export const text = (state: RootState) => state.text.text;
export const incomingChars = (state: RootState) =>
    state.text.incomingChars;
export const outgoingChars = (state: RootState) =>
    state.text.outgoingChars;
export const currentChar = (state: RootState) =>
    state.text.currentChar;
export const leftPadding = (state: RootState) =>
    state.text.leftPadding;

export default TextSlice.reducer;
