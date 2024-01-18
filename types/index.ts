export enum Category {
  passenger = "passenger",
  cargo = "cargo",
  special = "special",
}

export enum CategoryColor {
  all = "black",
  passenger = "red",
  cargo = "green",
  special = "blue",
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
