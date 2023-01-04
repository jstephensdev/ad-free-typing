import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface KeyState {
    value: string;
}

const initialState: KeyState = {
    value: '',
};

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
