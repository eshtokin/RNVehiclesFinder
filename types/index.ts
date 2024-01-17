export enum Category {
  Passenger = "passenger",
  Cargo = "cargo",
  Special = "special",
}

export type Driver = {
  name: string;
};

export type Vehicle = {
  id: number;
  category: Category;
  brand: string;
  driver: Driver;
  location: Location;
};

export type Location = {
  latitude: number;
  longitude: number;
};
