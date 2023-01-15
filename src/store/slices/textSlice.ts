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
};

export const newTextByMode = (mode: TextMode): string => {
    let text = '';
    if (mode === TextMode.words) {
        text = fakerWords(5);
    } else if (mode === TextMode.numbers) {
        text = fakerNumbers(5);
    } else if (mode === TextMode.sentences) {
        text = fakerText();
    } else if (mode === TextMode.alphaNumeric) {
        text = fakerAlphaNumeric(5);
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
