import { StudentType } from "../02/02";
import { addSkill, doesStudentLiveIn, makeStudentActive } from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
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
});

test("new tech should be added to student", () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
});

test("student is active", () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
});

test("does student live in city?", () => {
    const result2 = doesStudentLiveIn(student, "Moscow");
    const result1 = doesStudentLiveIn(student, "Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
});
