import reducer, { RoutingState, setUrl } from '../../store/slices/routingSlice';

const state = {
    href: 'http://localhost',
    pathname: '/',
};

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(state);
});

test('setUrl should return updated url', () => {
    const initialState: RoutingState = state;
    expect(reducer(initialState, setUrl('/test'))).toEqual({
        ...state,
        href: 'http://localhost',
        pathname: '/test',
    });
});
