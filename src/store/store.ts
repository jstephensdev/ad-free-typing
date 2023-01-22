import { configureStore } from '@reduxjs/toolkit';
import statsReducer from './slices/statsSlice';
import textReducer from './slices/textSlice';
import routingRouter, { setWindowLocation } from './slices/routingSlice';

export const store = configureStore({
    reducer: {
        routing: routingRouter,
        stats: statsReducer,
        text: textReducer,
    },
});

// Update URL in the browser when routing state updates in Redux.
store.subscribe(() => {
    const { pathname } = store.getState().routing;
    if (window.location.pathname !== pathname) {
        window.history.pushState(null, '', pathname);
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred types: routing, stats, text
export type AppDispatch = typeof store.dispatch;

// Update Redux if we navigated via browser's back/forward
window.addEventListener('popstate', () => {
    store.dispatch(
        setWindowLocation(JSON.parse(JSON.stringify(window.location)))
    );
});
