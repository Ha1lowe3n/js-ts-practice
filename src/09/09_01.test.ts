import { increaseAge, UserType } from "./09_01";

test("reference type test", () => {
    const user: UserType = {
        name: "Dimych",
        age: 32,
    };

    increaseAge(user);

    expect(user.age).toBe(33);

    const superman = user;
    superman.age = 1000;

    expect(user.age).toBe(1000);
});

test("array test", () => {
    const users: UserType[] = [
        { name: "Dimych", age: 32 },
        { name: "Sanya", age: 40 },
    ];

    const admins = users;
    admins.push({ name: "Rata", age: 19 });

    expect(users.length).toBe(3);
    expect(users[2].name).toBe("Rata");
    expect(users[2]).toEqual({ name: "Rata", age: 19 });
});
