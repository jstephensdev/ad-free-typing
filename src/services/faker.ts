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
