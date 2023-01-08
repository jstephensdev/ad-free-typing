import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { App } from '../App';
import React from 'react';

test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(store.getState().routing.pathname).toBe('/');
});
