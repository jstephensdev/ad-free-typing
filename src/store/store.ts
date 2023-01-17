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

// Update URL in the browser when app state updates in Redux.
// Subscribe to routing state and update when it changes.
store.subscribe(() => {
    const { pathname } = store.getState().routing;
    const { href } = store.getState().routing;
    if (window.location.pathname !== pathname) {
        window.history.pushState(
            null,
            '',
            href.replace(/\/.*$/, '') + pathname
        );
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred types: stats, text
export type AppDispatch = typeof store.dispatch;

// Update redux window location on initial page load and if page reload, safari fix
store.dispatch(setWindowLocation(JSON.parse(JSON.stringify(window.location))));

// Update Redux if we navigated via browser's back/forward
window.addEventListener('popstate', () => {
    store.dispatch(
        setWindowLocation(JSON.parse(JSON.stringify(window.location)))
    );
});
