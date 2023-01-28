import { faker } from '@faker-js/faker';

export const fakerText = (): string => faker.lorem.paragraph();

export const fakerWords = (x: number): string => {
    const words: Array<string> = [];
    for (let i = 0; i < 30; i++) {
        words.push(faker.word.adjective(x));
    }
    return words.join(' ');
};

export const fakerNumbers = (x: number): string => {
    const numbers: Array<string> = [];
    for (let i = 0; i < 30; i++) {
        numbers.push(faker.random.numeric(x));
    }
    return numbers.join(' ');
};

export const fakerAlphaNumeric = (x: number): string => {
    const alphaNumericStrings: Array<string> = [];
    for (let i = 0; i < 30; i++) {
        alphaNumericStrings.push(faker.random.alphaNumeric(x));
    }
    return alphaNumericStrings.join(' ');
};
