import { configureStore } from '@reduxjs/toolkit';
import keyReducer from './keySlice';
import statsReducer from './statsSlice';
import textReducer from './textSlice';

export const store = configureStore({
    reducer: {
        keyPressed: keyReducer,
        stats: statsReducer,
        text: textReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred types: keyPressed, stats, textSelection
export type AppDispatch = typeof store.dispatch;
