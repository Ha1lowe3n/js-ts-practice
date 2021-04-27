export type UserType = {
    name: string;
    age: number;
};

export const user: UserType = {
    name: "Dimych",
    age: 32,
};

export const increaseAge = (user: UserType) => {
    user.age++;
};
