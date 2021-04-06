export type ManType = {
    name: string;
    age: number;
};

const people: Array<ManType> = [
    { name: "Andrew Ivanov", age: 23 },
    { name: "Alexander Petrov", age: 24 },
    { name: "Igor Trifonov", age: 18 },
];

const dimychTransformator = (man: ManType) => ({
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
});

const devs1 = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Andrew",
        lastName: "Ivanov",
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Alexander",
        lastName: "Petrov",
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Igor",
        lastName: "Trifonov",
    },
];

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
];

const devs3 = people.map(dimychTransformator);

const messages = people.map(
    (man) => `Hello ${man.name.split(" ")[0]}. Welcome to IT-INCUBATOR`
);

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(
        (man) => `Hello ${man.name.split(" ")[0]}. Welcome to IT-INCUBATOR`
    );
};
