import { useEffect, useState } from 'react';

const keysToRegister: string[] = [
  'CapsLock',
  'Shift',
  'Control',
  'WakeUp',
  'Alt',
  'Tab',
  'Backspace',
];

export const useKeyDetection = (callback: (key: string) => void): string => {
  const [keyPress, setKeyPress] = useState('');

  useEffect(() => {
    const downHandler = (e: KeyboardEvent): void => {
      // prevents other key press until capslock is off
      if (keysToRegister[0] === e.key || keysToRegister[0] === keyPress) {
        setKeyPress(keysToRegister[0]);
        return;
      }
      if (
        keyPress !== e.key ||
        e.key.length === 1 ||
        keysToRegister.includes(e.key)
      ) {
        setKeyPress(e.key);
        callback && callback(e.key);
      }
    };

    const upHandler = (e: KeyboardEvent): void => {
      // prevents capslock from appearing off if shift key is selected
      if (keysToRegister[0] === keyPress && keysToRegister[1] === e.key) {
        return;
      }
      // deselect keysToRegister when condition above is not true
      if (keysToRegister.includes(e.key)) {
        setKeyPress('');
      }
    };
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });
  return keyPress;
};
