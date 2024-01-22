import { Vehicle, Location } from "types";

export function calculateAverageLocation(vehicles: Vehicle[]): Location {
  const initialValue = {
    latitude: 0,
    longitude: 0,
    longitudeDelta: 0,
    latitudeDelta: 0,
  };
  return vehicles.reduce((accumulator, { location }, currentIndex, array) => {
    accumulator.longitude += location.longitude;
    accumulator.latitude += location.latitude;

    const isLastElement = currentIndex === array.length - 1;
    if (isLastElement) {
      for (const key in accumulator) {
        key as keyof typeof accumulator;
        accumulator[key] = accumulator[key] / array.length;
      }
    }
    return accumulator;
  }, initialValue);
}
