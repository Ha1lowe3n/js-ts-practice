import { StudentType } from "../02/02";
import { CityType, GovermentBuildingType, HouseType } from "../02/cityType";

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

export const addMoneyToBudget = (
    governmentBuilding: GovermentBuildingType,
    money: number
) => {
    governmentBuilding.budget += money;
};

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
};

export const toFireStaff = (
    governmentBuilding: GovermentBuildingType,
    minus: number
) => {
    governmentBuilding.staffCount -= minus;
};

export const toHireStaff = (
    governmentBuilding: GovermentBuildingType,
    plus: number
) => {
    governmentBuilding.staffCount += plus;
};

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} people.`;
};
