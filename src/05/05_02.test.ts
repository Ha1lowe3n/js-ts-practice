import { CityType } from "../02/cityType";
import {
    createMessages,
    getStreetsTitleOfGovermentsBuildings,
    getStreetTitleOfHouses,
} from "./05_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: { number: 100, street: { title: "White street" } },
            },
            {
                id: 1,
                buildedAt: 2008,
                repaired: false,
                address: { number: 100, street: { title: "Happy street" } },
            },
            {
                id: 1,
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

test("List of street titles of goverments buildings", () => {
    const streets = getStreetsTitleOfGovermentsBuildings(
        city.governmentBuilding
    );

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe("Central street");
    expect(streets[1]).toBe("South Str");
});

test("List of street titles", () => {
    const streets = getStreetTitleOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
});

test("Creating greeting messages for street", () => {
    const messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street");
    expect(messages[1]).toBe("Hello guys from Happy street");
    expect(messages[2]).toBe("Hello guys from Happy street");
});
