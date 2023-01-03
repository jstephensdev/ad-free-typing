import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export default keySlice.reducer;
