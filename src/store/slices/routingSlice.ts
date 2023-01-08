import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RoutingState {
    pathname: string;
}

const initialState: RoutingState = {
    pathname:
        typeof window.location !== 'undefined' ? window.location.pathname : '/',
};

export const RoutingSlice = createSlice({
    name: 'routing',
    initialState,
    reducers: {
        setUrl: (state, action: PayloadAction<string>) => {
            state.pathname = action.payload;
        },
    },
});

export const { setUrl } = RoutingSlice.actions;

export default RoutingSlice.reducer;
