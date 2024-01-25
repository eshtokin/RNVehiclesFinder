import { Vehicle, Location, Category } from "types";
import { DEFAULT_NUMBER_FOR_MESSAGE } from "./constants";
import { Linking } from "react-native";
import i18n from "localizations/i18n";
import { Region } from "react-native-maps";

// function for calculating average coordinates where  vehicles is located on map
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

// function for make a delay
export async function sleep(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(ms < 3000 ? resolve : reject, ms);
  });
}

export function selectVehiclesByCategory(
  data: Vehicle[],
  category: Category
): Vehicle[] {
  return category === Category.all
    ? data
    : data.filter((v) => v.category === category);
}

// Function that take an object of resources for localization
// and return a next language key based on current key
export function getNextAvailableLanguage(
  resources: object,
  currentLanguage: string
) {
  return (
    Object.keys(resources).filter((key) => key !== currentLanguage)[0] ||
    currentLanguage
  );
}

// Functin for navigate user to WhatsApp with prefilled message
export function sendMessageWithWhatsap(
  number = DEFAULT_NUMBER_FOR_MESSAGE,
  message = i18n.t("vehicle.defaultMessage")
) {
  Linking.openURL(`whatsapp://send?phone=${number}&text=${message}`);
}

// Function for making external calls
export function makeExternalCall(number = DEFAULT_NUMBER_FOR_MESSAGE) {
  Linking.openURL(`tel:${number}`);
}

//  Calculate deltas for bunch of cars
type Deltas = Omit<Region, keyof Location>;
export function calculateDeltas(coords: Location[]): Deltas {
  // Earth radius in kilometers
  const EARTH_RADIUS = 6371;

  // Convert coordinates from degrees to radians
  const coordsInRadians = coords.map((coord) => ({
    latitude: (coord.latitude * Math.PI) / 180,
    longitude: (coord.longitude * Math.PI) / 180,
  }));

  // Calculate the differences between coordinates
  const dlat = coordsInRadians[1].latitude - coordsInRadians[0].latitude;
  const dlon = coordsInRadians[1].longitude - coordsInRadians[0].longitude;

  // Haversine formula
  const a =
    Math.sin(dlat / 2) ** 2 +
    Math.cos(coordsInRadians[0].latitude) *
      Math.cos(coordsInRadians[1].latitude) *
      Math.sin(dlon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate the distance between the two points in kilometers
  const distance = EARTH_RADIUS * c;

  // Set a buffer value for a better display
  const bufferFactor = 1.5;
  // const bufferFactor = 2.6;
  const bufferedDistance = distance * bufferFactor;

  // Calculate latitude and longitude deltas
  const latitudeDelta = bufferedDistance / 110.0;
  const longitudeDelta =
    bufferedDistance /
    (110.0 *
      Math.cos(
        (coordsInRadians[0].latitude + coordsInRadians[1].latitude) / 2.0
      ));

  return { latitudeDelta, longitudeDelta };
}
