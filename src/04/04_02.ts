import { CityType, GovermentBuildingType } from "../02/cityType";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter((h) => h.address.street.title !== street);
};

export const getBuildingWithStaffCountGreatThen = (
    buildings: Array<GovermentBuildingType>,
    count: number
) => {
    return buildings.filter((b) => b.staffCount > count);
};
