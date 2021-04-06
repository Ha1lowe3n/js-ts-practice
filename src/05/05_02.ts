import { GovermentBuildingType, HouseType } from "../02/cityType";

const addressStreetTitle = (title: GovermentBuildingType | HouseType) => {
    return title.address.street.title;
};

export const getStreetsTitleOfGovermentsBuildings = (
    governmentBuilding: Array<GovermentBuildingType>
) => {
    return governmentBuilding.map((build) => addressStreetTitle(build));
};

export const getStreetTitleOfHouses = (houses: Array<HouseType>) => {
    return houses.map((house) => addressStreetTitle(house));
};

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(
        (house) => `Hello guys from ${addressStreetTitle(house)}`
    );
};
