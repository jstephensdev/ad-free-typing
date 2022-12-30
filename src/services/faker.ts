import { faker } from '@faker-js/faker';

export const fakerText = () => faker.lorem.paragraph();

const getWords = (x: number): Array<string> => {
    const words: Array<string> = [];
    for (let i = 0; i < 30; i++) {
        words.push(faker.lorem.word(x));
    }
    return words;
};

export const fakerWords = (x: number) => getWords(x).join(' ');

const getNumbers = (x: number): Array<string> => {
    const numbers: Array<string> = [];
    for (let i = 0; i < 30; i++) {
        numbers.push(faker.random.numeric(x));
    }
    return numbers;
};

export const fakerNumbers = (x: number) => getNumbers(x).join(' ');

const getAlphaNumeric = (x: number): Array<string> => {
    const alphaNumericStrings: Array<string> = [];
    for (let i = 0; i < 30; i++) {
        alphaNumericStrings.push(faker.random.alphaNumeric(x));
    }
    return alphaNumericStrings;
};

export const fakerAlphaNumeric = (x: number) => getAlphaNumeric(x).join(' ');
