type StreetType = {
    title: string;
};

type AdressType = {
    number: number;
    street: StreetType;
};

export type HouseType = {
    buildedAt: number;
    repaired: boolean;
    address: AdressType;
};

type GovermentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION";
    budget: number;
    staffCount: number;
    address: AdressType;
};

export type CityType = {
    title: string;
    houses: Array<HouseType>;
    governmentBuilding: Array<GovermentBuildingType>;
    citizensNumber: number;
};
