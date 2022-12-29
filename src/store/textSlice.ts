import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { fakerText, fakerWords } from '../services/faker';

interface TextState {
    easy: string;
    hard: string;
    easyOrHard: boolean;
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
    hard: fakerText(),
    easyOrHard: false,
    text: initialText,
    incomingChars: initialText.substring(1),
    outgoingChars: '',
    typedChars: '',
    currentChar: initialText.charAt(0),
    leftPadding: new Array(30).fill(' ').join(''),
} as TextState;

export const TextSlice = createSlice({
    name: 'textSelection',
    initialState,
    reducers: {
        setEasyOrHard: (state, action: PayloadAction<boolean>) => {
            state.easyOrHard = action.payload;
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
    setEasyOrHard,
    setText,
    setIncomingChars,
    setCurrentChar,
    setOutgoingChars,
    setTypedChars,
    setLeftPadding,
} = TextSlice.actions;

export const selectEasyText = (state: RootState) => state.textSelection.easy;
export const selectHardText = (state: RootState) => state.textSelection.hard;
export const easyOrHard = (state: RootState) => state.textSelection.easyOrHard;
export const text = (state: RootState) => state.textSelection.text;
export const incomingChars = (state: RootState) =>
    state.textSelection.incomingChars;
export const outgoingChars = (state: RootState) =>
    state.textSelection.outgoingChars;
export const currentChar = (state: RootState) =>
    state.textSelection.currentChar;
export const leftPadding = (state: RootState) =>
    state.textSelection.leftPadding;

export default TextSlice.reducer;
