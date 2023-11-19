import { useEffect, useState } from 'react';

const specialKeys: string[] = [
  'CapsLock',
  'Shift',
  'Control',
  'WakeUp',
  'Alt',
  'Tab',
  'Backspace',
  'Enter',
];

export const useKeyDetection = (callback: (key: string) => void): string => {
  const [keyPress, setKeyPress] = useState('');

  useEffect(() => {
    const downHandler = (e: KeyboardEvent): void => {
      if (
        keyPress !== e.key ||
        e.key.length === 1 ||
        specialKeys.includes(e.key)
      ) {
        setKeyPress(e.key);
        callback && callback(e.key);
      }
    };

    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  });
  return keyPress;
};
