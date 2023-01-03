import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    duration: '00.00',
    wordCount: 0,
    wpm: '00.00',
    acc: '000.00',
    errorRate: '000.00',
} as StartTimeState;

export const StartTimeSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        setStartTime: (state, action: PayloadAction<number>) => {
            state.startTime = action.payload;
        },
        setDuration: (state, action: PayloadAction<string>) => {
            state.duration = action.payload;
        },
        setWordCount: (state, action: PayloadAction<number>) => {
            state.wordCount = action.payload;
        },
        setWpm: (state, action: PayloadAction<string>) => {
            state.wpm = action.payload;
        },
        setAcc: (state, action: PayloadAction<string>) => {
            state.acc = action.payload;
        },
        resetStats: (state) => {
            state.startTime = initialState.startTime;
            state.duration = initialState.duration;
            state.wordCount = initialState.wordCount;
            state.wpm = initialState.wpm;
            state.acc = initialState.acc;
            state.errorRate = initialState.errorRate;
        },
    },
});

export const {
    setStartTime,
    setWordCount,
    setWpm,
    setAcc,
    resetStats,
    setDuration,
} = StartTimeSlice.actions;

export default StartTimeSlice.reducer;
