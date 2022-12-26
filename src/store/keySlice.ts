import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface KeyState {
    value: string;
}

const initialState = {
    value: '',
} as KeyState;

export const keySlice = createSlice({
    name: 'keyPressed',
    initialState,
    reducers: {
        setKey: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setKey } = keySlice.actions;

export const selectKeyPressed = (state: RootState) => state.keyPressed.value;

export default keySlice.reducer;
