import { useEffect, useState } from "react";
import { Vehicle } from "types";

async function getVehicleById(_id: number) {
  const vehicles: Vehicle[] = await require("./../data/mock-data.json");
  return vehicles.find((v) => v.id === _id);
}

export default function useVehicleDetails(_id: number) {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    getVehicleById(_id).then(setVehicle).catch(console.log);
  }, []);

  return vehicle;
}
