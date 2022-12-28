import { configureStore } from '@reduxjs/toolkit';
import keyReducer from './keySlice';
import startTimeReducer from './startTimeSlice';
import textReducer from './textSlice';

export const store = configureStore({
    reducer: {
        keyPressed: keyReducer,
        startTime: startTimeReducer,
        textSelection: textReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: keyPressed
export type AppDispatch = typeof store.dispatch;
