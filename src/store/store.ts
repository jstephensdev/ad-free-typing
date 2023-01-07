import { configureStore } from '@reduxjs/toolkit';
import statsReducer from './slices/statsSlice';
import textReducer from './slices/textSlice';

export const store = configureStore({
    reducer: {
        stats: statsReducer,
        text: textReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred types: stats, text
export type AppDispatch = typeof store.dispatch;
