import { createGreetingMessage, ManType } from "./05_01";

let people: Array<ManType> = [
    { name: "Andrew Ivanov", age: 23 },
    { name: "Alexander Petrov", age: 24 },
    { name: "Igor Trifonov", age: 18 },
];

beforeEach(() => {
    people = [
        { name: "Andrew Ivanov", age: 23 },
        { name: "Alexander Petrov", age: 24 },
        { name: "Igor Trifonov", age: 18 },
    ];
});

test("should be array of greeting messages", () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(people.length);
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT-INCUBATOR");
    expect(messages[1]).toBe("Hello Alexander. Welcome to IT-INCUBATOR");
    expect(messages[2]).toBe("Hello Igor. Welcome to IT-INCUBATOR");
});
