import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface StartTimeState {
    startTime: number;
    duration: string;
    wordCount: number;
    wpm: string;
    acc: string;
    errorRate: string;
}

const initialState = {
    startTime: 0,
} as StartTimeState;

export const StartTimeSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        setStartTime: (state, action: PayloadAction<number>) => {
            state.startTime = action.payload;
        },
    },
});

export const { setStartTime } = StartTimeSlice.actions;

export const selectStartTime = (state: RootState) => state.stats.startTime;

export default StartTimeSlice.reducer;
