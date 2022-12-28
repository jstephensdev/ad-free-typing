import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { fakerText, fakerWords } from '../services/faker';

interface TextState {
    easy: string;
    hard: string;
    easyOrHard: boolean;
}

const initialState = {
    easy: fakerWords(5),
    hard: fakerText(),
    easyOrHard: false,
} as TextState;

export const TextSlice = createSlice({
    name: 'textSelection',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<boolean>) => {
            state.easyOrHard = action.payload;
        },
    },
});

export const { setText } = TextSlice.actions;

export const selectEasyText = (state: RootState) => state.textSelection.easy;
export const selectHardText = (state: RootState) => state.textSelection.hard;
export const easyOrHard = (state: RootState) => state.textSelection.easyOrHard;

export default TextSlice.reducer;
