import { configureStore } from '@reduxjs/toolkit';
import statsReducer from './slices/statsSlice';
import textReducer from './slices/textSlice';
import routingRouter, { setUrl } from './slices/routingSlice';

export const store = configureStore({
    reducer: {
        routing: routingRouter,
        stats: statsReducer,
        text: textReducer,
    },
});

// The other part of the two-way binding is updating the displayed
// URL in the browser if we change it inside our app state in Redux.
// We can simply subscribe to Redux and update it if it's different.
store.subscribe(() => {
    const { pathname } = store.getState().routing;
    if (window.location.pathname !== pathname) {
        window.history.pushState(null, '', pathname);
        // Force scroll to top this is what browsers normally do when
        // navigating by clicking a link.
        // Without this, scroll stays wherever it was which can be quite odd.
        document.body.scrollTop = 0;
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred types: stats, text
export type AppDispatch = typeof store.dispatch;

// Update Redux if we navigated via browser's back/forward
// most browsers restore scroll position automatically
// as long as we make content scrolling happen on document.body
window.addEventListener('popstate', () => {
    // here `doUpdateUrl` is an action creator that
    // takes the new url and stores it in Redux.
    store.dispatch(setUrl(window.location.pathname));
});
