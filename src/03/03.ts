import { StudentType } from "../02/02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    });
};

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
};

export const doesStudentLiveIn = (student: StudentType, title: string) => {
    return student.address.city.title === title;
};
