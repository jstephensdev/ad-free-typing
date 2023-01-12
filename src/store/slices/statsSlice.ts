import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TextMode } from './textSlice';

export interface RecentStat {
    mode: TextMode;
    duration: string;
    wpm: string;
    acc: string;
    errorRate: string;
}

export interface StartTimeState {
    startTime: number;
    duration: string;
    wordCount: number;
    wpm: string;
    acc: string;
    errorRate: string;
    recentStats: Array<RecentStat>;
}

const initialState: StartTimeState = {
    startTime: 0,
    duration: '00.00',
    wordCount: 0,
    wpm: '00.00',
    acc: '000.00',
    errorRate: '000.00',
    recentStats: [],
};

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
        setRecentStat: (state, action: PayloadAction<TextMode>) => {
            state.recentStats.push({
                mode: action.payload,
                duration: state.duration,
                wpm: state.wpm,
                acc: state.acc,
                errorRate:
                    state.acc === '000.00'
                        ? '000.00'
                        : (100 - Number(state.acc)).toFixed(2),
            });
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
    setRecentStat,
} = StartTimeSlice.actions;

export default StartTimeSlice.reducer;
