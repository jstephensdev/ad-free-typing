// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

export const mockFakerText = jest.fn();
export const mockFakerWords = jest.fn();
export const mockFakerAlphaNumeric = jest.fn();
export const mockFakerNumbers = jest.fn();
export const mockFakerPhrases = jest.fn();
export const mockFakerEasyPhrases = jest.fn();

jest.mock('./services/text', () => {
    return {
        fakerText: mockFakerText,
        fakerWords: mockFakerWords,
        fakerAlphaNumeric: mockFakerAlphaNumeric,
        fakerNumbers: mockFakerNumbers,
        fakerPhrases: mockFakerPhrases,
        fakerEasyPhrases: mockFakerEasyPhrases
    };
});

mockFakerText.mockReturnValue('fakerText');
mockFakerWords.mockReturnValue('fakerWords');
mockFakerAlphaNumeric.mockReturnValue('fak3rAlphaNum3ric');
mockFakerNumbers.mockReturnValue('1234 1234');
mockFakerPhrases.mockReturnValue('Text, test!');
mockFakerEasyPhrases.mockReturnValue('test test test');

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

mockHref.mockReturnValue('http://localhost/');
mockPathname.mockReturnValue('/');
