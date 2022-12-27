export type key = {
    id: number;
    name: Array<string> | string;
    key?: string;
    class: string;
};
export const KeyboardRows: Array<Array<key>> = [
    [
        {
            id: 48,
            name: ['~', '`'],
            class: 'key-default key-double',
        },
        {
            id: 50,
            name: ['!', '1'],
            class: 'key-default key-double',
        },
        {
            id: 51,
            name: ['@', '2'],
            class: 'key-default key-double',
        },
        {
            id: 52,
            name: ['#', '3'],
            class: 'key-default key-double',
        },
        {
            id: 53,
            name: ['$', '4'],
            class: 'key-default key-double',
        },
        {
            id: 54,
            name: ['%', '5'],
            class: 'key-default key-double',
        },
        {
            id: 55,
            name: ['^', '6'],
            class: 'key-default key-double',
        },
        {
            id: 56,
            name: ['&', '7'],
            class: 'key-default key-double',
        },
        {
            id: 57,
            name: ['*', '8'],
            class: 'key-default key-double',
        },
        {
            id: 58,
            name: ['(', '9'],
            class: 'key-default key-double',
        },
        {
            id: 59,
            name: [')', '0'],
            class: 'key-default key-double',
        },
        {
            id: 60,
            name: ['_', '-'],
            class: 'key-default key-double',
        },
        {
            id: 61,
            name: ['+', '='],
            class: 'key-default key-double',
        },
        {
            id: 62,
            name: 'Backspace',
            class: 'key-default',
        },
    ],
    [
        {
            id: 39,
            name: 'Tab',
            class: 'key-default medium-key',
        },
        {
            id: 1,
            name: 'q',
            class: 'key-default',
        },
        {
            id: 2,
            name: 'w',
            class: 'key-default',
        },
        {
            id: 3,
            name: 'e',
            class: 'key-default',
        },
        {
            id: 4,
            name: 'r',
            class: 'key-default',
        },
        {
            id: 5,
            name: 't',
            class: 'key-default',
        },
        {
            id: 6,
            name: 'y',
            class: 'key-default',
        },
        {
            id: 7,
            name: 'u',
            class: 'key-default',
        },
        {
            id: 8,
            name: 'i',
            class: 'key-default',
        },
        {
            id: 9,
            name: 'o',
            class: 'key-default',
        },
        {
            id: 10,
            name: 'p',
            class: 'key-default',
        },
        {
            id: 36,
            name: ['{', '['],
            class: 'key-default key-double',
        },
        {
            id: 37,
            name: ['}', ']'],
            class: 'key-default key-double',
        },
        {
            id: 38,
            name: ['|', '\\'],
            class: 'key-default key-double',
        },
    ],
    [
        {
            id: 35,
            name: 'CapsLock',
            class: 'key-default medium-key',
        },
        {
            id: 11,
            name: 'a',
            class: 'key-default',
        },
        {
            id: 12,
            name: 's',
            class: 'key-default',
        },
        {
            id: 13,
            name: 'd',
            class: 'key-default',
        },
        {
            id: 14,
            name: 'f',
            class: 'key-default',
        },
        {
            id: 15,
            name: 'g',
            class: 'key-default',
        },
        {
            id: 16,
            name: 'h',
            class: 'key-default',
        },
        {
            id: 17,
            name: 'j',
            class: 'key-default',
        },
        {
            id: 18,
            name: 'k',
            class: 'key-default',
        },
        {
            id: 19,
            name: 'l',
            class: 'key-default',
        },
        {
            id: 32,
            name: [':', ';'],
            class: 'key-default key-double',
        },
        {
            id: 33,
            name: ['"', "'"],
            class: 'key-default key-double',
        },
        {
            id: 34,
            name: 'Enter',
            class: 'key-default medium-key',
        },
    ],
    [
        {
            id: 31,
            name: 'Shift',
            class: 'key-default medium-key',
        },
        {
            id: 20,
            name: 'z',
            class: 'key-default',
        },
        {
            id: 21,
            name: 'x',
            class: 'key-default',
        },
        {
            id: 22,
            name: 'c',
            class: 'key-default',
        },
        {
            id: 23,
            name: 'v',
            class: 'key-default',
        },
        {
            id: 24,
            name: 'b',
            class: 'key-default',
        },
        {
            id: 25,
            name: 'n',
            class: 'key-default',
        },
        {
            id: 26,
            name: 'm',
            class: 'key-default',
        },
        {
            id: 27,
            name: ['<', ','],
            class: 'key-default key-double',
        },
        {
            id: 28,
            name: ['<', '.'],
            class: 'key-default key-double',
        },
        {
            id: 29,
            name: ['?', '/'],
            class: 'key-default key-double',
        },
        {
            id: 30,
            name: 'Shift',
            class: 'key-default medium-key',
        },
    ],
    [
        {
            id: 40,
            name: 'Fn',
            key: 'WakeUp',
            class: 'key-default medium-key',
        },
        {
            id: 41,
            name: 'Ctrl',
            key: 'Control',
            class: 'key-default medium-key',
        },
        {
            id: 42,
            name: 'Super',
            class: 'key-default',
        },
        {
            id: 43,
            name: 'Alt',
            class: 'key-default',
        },
        {
            id: 44,
            name: 'Space',
            key: ' ',
            class: 'key-default space-key',
        },
        {
            id: 45,
            name: 'Alt',
            class: 'key-default',
        },
        {
            id: 46,
            name: 'PrtSc',
            class: 'key-default',
        },
        {
            id: 47,
            name: 'Ctrl',
            key: 'Control',
            class: 'key-default medium-key',
        },
    ],
];
