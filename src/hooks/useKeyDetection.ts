import { useEffect, useState } from 'react';

const specialKeys: string[] = [
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
      if (specialKeys[5] === e.key) {
        e.preventDefault();
      }
      if (specialKeys[0] === e.key || specialKeys[0] === keyPress) {
        // prevents other key press until capslock is off
        setKeyPress(specialKeys[0]);
        return;
      }
      if (
        keyPress !== e.key ||
        e.key.length === 1 ||
        specialKeys.includes(e.key)
      ) {
        setKeyPress(e.key);
        callback && callback(e.key);
      }
    };

    const upHandler = (e: KeyboardEvent): void => {
      // prevents capslock from appearing off when selecting shift or tab key when capslock
      // is on
      if (
        specialKeys[0] === keyPress &&
        (specialKeys[1] === e.key || specialKeys[5] === e.key)
      ) {
        return;
      }
      // deselect specialKeys when condition above is not true
      if (specialKeys.includes(e.key)) {
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
