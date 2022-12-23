import { faker } from '@faker-js/faker';

export const Text = () => {
    return (
        <>
            <section className="text-section">
                <p>{faker.lorem.paragraph().slice(-122)}</p>
            </section>
        </>
    );
};
