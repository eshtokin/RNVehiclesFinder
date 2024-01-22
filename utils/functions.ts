import { Vehicle, Location, Category } from "types";
import { DEFAULT_NUMBER_FOR_MESSAGE } from "./constants";
import { Linking } from "react-native";
import i18n from "localizations/i18n";

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
