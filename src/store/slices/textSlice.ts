import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    fakerText,
    fakerWords,
    fakerAlphaNumeric,
    fakerNumbers,
} from '../../services/faker';

export interface TextState {
    words: string;
    numbers: string;
    sentences: string;
    alphaNumeric: string;
    mode: TextMode;
    text: string;
    incomingChars: string;
    outgoingChars: string;
    currentChar: string;
    typedChars: string;
    leftPadding: string;
}

export enum TextMode {
    words = 'Words',
    numbers = 'Numbers',
    sentences = 'Lorem Ipsum Sentences',
    alphaNumeric = 'AlphaNumeric',
}

export const modes: Array<TextMode> = [
    TextMode.words,
    TextMode.numbers,
    TextMode.sentences,
    TextMode.alphaNumeric,
];

const initialText = fakerWords(5);

const initialState: TextState = {
    words: initialText,
    numbers: fakerNumbers(5),
    sentences: fakerText(),
    alphaNumeric: fakerAlphaNumeric(5),
    mode: TextMode.words,
    text: initialText,
    incomingChars: initialText.substring(1),
    outgoingChars: '',
    typedChars: '',
    currentChar: initialText.charAt(0),
    leftPadding: '',
};

export const TextSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<TextMode>) => {
            let textToSet = '';
            if (action.payload === TextMode.words) {
                textToSet = state.words;
            } else if (action.payload === TextMode.sentences) {
                textToSet = state.sentences;
            } else if (action.payload === TextMode.numbers) {
                textToSet = state.numbers;
            } else if (action.payload === TextMode.alphaNumeric) {
                textToSet = state.alphaNumeric;
            }
            state.mode = action.payload;
            state.text = textToSet;
            state.incomingChars = textToSet.substring(1);
            state.outgoingChars = '';
            state.typedChars = '';
            state.currentChar = textToSet.charAt(0);
            state.leftPadding = initialState.leftPadding;
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
        generateNewText: (state, action: PayloadAction<TextMode>) => {
            let textToSet = '';
            if (action.payload === TextMode.words) {
                textToSet = fakerWords(5);
            } else if (action.payload === TextMode.sentences) {
                textToSet = fakerText();
            } else if (action.payload === TextMode.numbers) {
                textToSet = fakerNumbers(5);
            } else if (action.payload === TextMode.alphaNumeric) {
                textToSet = fakerAlphaNumeric(5);
            }
            state.mode = action.payload;
            state.text = textToSet;
            state.incomingChars = textToSet.substring(1);
            state.outgoingChars = '';
            state.typedChars = '';
            state.currentChar = textToSet.charAt(0);
            state.leftPadding = initialState.leftPadding;
        },
    },
});

export const {
    setText,
    setIncomingChars,
    setCurrentChar,
    setOutgoingChars,
    setTypedChars,
    setLeftPadding,
    generateNewText,
} = TextSlice.actions;

export default TextSlice.reducer;
