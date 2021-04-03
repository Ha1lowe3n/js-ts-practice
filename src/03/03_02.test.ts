import { CityType } from "../02/cityType";
import {
    addMoneyToBudget,
    createMessage,
    repairHouse,
    toFireStaff,
    toHireStaff,
} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: { number: 100, street: { title: "White street" } },
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: { number: 100, street: { title: "Happy street" } },
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: { number: 101, street: { title: "Happy street" } },
            },
        ],
        governmentBuilding: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 1,
                    street: { title: "Central street" },
                },
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 2,
                    street: { title: "South Str" },
                },
            },
        ],
        citizensNumber: 100000,
    };
});

test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuilding[0], 100000);
    expect(city.governmentBuilding[0].budget).toBe(300000);
});

test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuilding[1], -100000);
    expect(city.governmentBuilding[1].budget).toBe(400000);
});

test("Houses should be repared", () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});

test("Staff should be decreased", () => {
    toFireStaff(city.governmentBuilding[0], 20);
    expect(city.governmentBuilding[0].staffCount).toBe(180);
});

test("Staff should be increased", () => {
    toHireStaff(city.governmentBuilding[0], 20);
    expect(city.governmentBuilding[0].staffCount).toBe(220);
});

test("Greeting message should be correct for city", () => {
    expect(createMessage(city)).toBe(
        "Hello New York citizens. I want you be happy. All 100000 people."
    );
});
