type CityType = {
    title: string;
    country: string;
};
type TechType = {
    id: number;
    title: string;
};
type AdressType = {
    streetTitle: string;
    city: CityType;
};
type StudentType = {
    name: string;
    age: number;
    isActive: boolean;
    address: AdressType;
    technologies: Array<TechType>;
};

const student: StudentType = {
    name: "Sasha",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Energetick",
        city: {
            title: "Moscow",
            country: "Russia",
        },
    },
    technologies: [
        { id: 1, title: "HTML" },
        { id: 2, title: "React" },
        { id: 3, title: "CSS" },
    ],
};

console.log(student.name);
console.log(student.age);
console.log(student.isActive);
console.log(student.address.city);
