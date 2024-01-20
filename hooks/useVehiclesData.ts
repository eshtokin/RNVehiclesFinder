import { useEffect, useState } from "react";
import { Category, Vehicle } from "../types";

async function getVehicles(): Promise<Vehicle[]> {
  return require("./../data/mock-data.json");
}

// create a hook for working with vehicle list
export default function useVehiclesData() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [category, setCategory] = useState<Category>(Category.all);

  const getVehicleByCategory = (_vehicles: Vehicle[], _category: Category) =>
    _vehicles.filter((v) => v.category === _category);

  const selectCategory = (_category: Category | null) => setCategory(_category);

  useEffect(() => {
    getVehicles().then(setVehicles).catch(console.log);
  }, []);

  useEffect(() => {
    const isCategorySelected = category !== Category.all;

    getVehicles()
      .then((_vehicles) =>
        isCategorySelected
          ? getVehicleByCategory(_vehicles, category)
          : _vehicles
      )
      .then(setVehicles)
      .catch(console.log);
  }, [category]);

  return { vehicles, category, selectCategory };
}
