import { renderHook } from '@testing-library/react';
import { useKeyDetection } from '../../hooks/useKeyDetection';

test('renders useKeyDetection hook', () => {
  const { result } = renderHook(() => useKeyDetection(() => {}));
  expect(result).toStrictEqual(JSON.parse(JSON.stringify({ current: '' })));
});
