// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('./services/faker', () => {
    return {
        fakerText: jest.fn().mockReturnValue('fakerText'),
        fakerWords: jest.fn().mockReturnValue('fakerWords'),
        fakerAlphaNumeric: jest.fn().mockReturnValue('fak3rAlphaNum3ric'),
        fakerNumbers: jest.fn().mockReturnValue('1234 1234'),
    };
});
