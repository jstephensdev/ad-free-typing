import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    fakerText,
    fakerWords,
    fakerAlphaNumeric,
    fakerNumbers,
    phrases
} from '../../services/text';

export interface TextState {
    mode: TextMode;
    text: string;
    incomingChars: string;
    outgoingChars: string;
    currentChar: string;
    typedChars: string;
}

export enum TextMode {
    words = 'Words',
    numbers = 'Numbers',
    loremSentences = 'Lorem Ipsum Sentences',
    alphaNumeric = 'AlphaNumeric',
    phrases = 'Phrases'
}

export const modes: Array<TextMode> = [
    TextMode.words,
    TextMode.numbers,
    TextMode.loremSentences,
    TextMode.alphaNumeric,
    TextMode.phrases
];

const initialText = phrases();

const initialState: TextState = {
    mode: TextMode.phrases,
    text: initialText,
    incomingChars: initialText.substring(1),
    outgoingChars: '',
    typedChars: '',
    currentChar: initialText.charAt(0),
};

if (localStorage.getItem('modeOption') === null) {
  localStorage.setItem('modeOption', JSON.stringify([]));
}

export const newTextByMode = (mode: TextMode): string => {
    let text = '';
    if (mode === TextMode.words) {
        text = fakerWords(5);
    } else if (mode === TextMode.numbers) {
        text = fakerNumbers(5);
    } else if (mode === TextMode.loremSentences) {
        text = fakerText();
    } else if (mode === TextMode.alphaNumeric) {
        text = fakerAlphaNumeric(5);
    } else if (mode === TextMode.phrases) {
        text = phrases();
    }
    return text;
};

export const TextSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<TextMode>) => {
            const textToSet = newTextByMode(action.payload);
            state.mode = action.payload;
            state.text = textToSet;
            state.incomingChars = textToSet.substring(1);
            state.outgoingChars = '';
            state.typedChars = '';
            state.currentChar = textToSet.charAt(0);
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
    },
});

export const {
    setText,
    setIncomingChars,
    setCurrentChar,
    setOutgoingChars,
    setTypedChars,
} = TextSlice.actions;

export default TextSlice.reducer;
