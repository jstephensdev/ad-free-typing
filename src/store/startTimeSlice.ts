import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface StartTimeState {
    value: number;
}

const initialState = {
    value: 0,
} as StartTimeState;

export const StartTimeSlice = createSlice({
    name: 'startTime',
    initialState,
    reducers: {
        setStartTime: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const { setStartTime } = StartTimeSlice.actions;

export const selectKeyPressed = (state: RootState) => state.startTime.value;

export default StartTimeSlice.reducer;
