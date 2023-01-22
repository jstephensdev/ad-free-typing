import { renderHook } from '@testing-library/react';
import { useKeyDetection } from '../../hooks/useKeyDetection';


test('renders ad free typing heading', () => {
    const { result } = renderHook(() => useKeyDetection(() => {}));
    expect(result).toStrictEqual(JSON.parse(JSON.stringify({"current": ""})));
});
