export enum Category {
  all = "all",
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
  phone: string;
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
