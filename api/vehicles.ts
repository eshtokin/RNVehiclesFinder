import { Vehicle } from "types";
import { sleep } from "utils/functions";

export async function getAllVehicles(): Promise<Vehicle[]> {
  await sleep(1500);
  return require("./../data/mock-data.json");
}
