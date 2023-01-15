// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

export const mockFakerText = jest.fn();
export const mockFakerWords = jest.fn();
export const mockFakerAlphaNumeric = jest.fn();
export const mockFakerNumbers = jest.fn();

jest.mock('./services/faker', () => {
    return {
        fakerText: mockFakerText,
        fakerWords: mockFakerWords,
        fakerAlphaNumeric: mockFakerAlphaNumeric,
        fakerNumbers: mockFakerNumbers,
    };
});

mockFakerText.mockReturnValue('fakerText');
mockFakerWords.mockReturnValue('fakerWords');
mockFakerAlphaNumeric.mockReturnValue('fak3rAlphaNum3ric');
mockFakerNumbers.mockReturnValue('1234 1234');

export const mockHref = jest.fn();
export const mockPathname = jest.fn();

Object.defineProperty(window, 'location', {
    value: {
        get href() {
            return mockHref();
        },
        get pathname() {
            return mockPathname();
        },
    },
});

mockHref.mockReturnValue('http://localhost');
mockPathname.mockReturnValue('/');
