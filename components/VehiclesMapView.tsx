import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useRef } from "react";
import { Vehicle, Location, CategoryColor } from "types";

const ANIMATION_DURATION = 1000;
const DELTA_FOR_SNGLE_CAR = { latitudeDelta: 0.04, longitudeDelta: 0.04 };
const DELTA_FOR_SEVERAL_CARS = {
  latitudeDelta: 6,
  longitudeDelta: 6,
};
const INITIAL_REGION = {
  latitude: 45.5,
  longitude: 39,
  longitudeDelta: 6,
  latitudeDelta: 6,
};

function calculateAverageLocation(vehicles: Vehicle[]): Location {
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

type VehiclesMapViewProps = { vehicles: Vehicle[] };
const VehiclesMapView: React.FC<VehiclesMapViewProps> = ({ vehicles }) => {
  const ref = useRef<MapView>();

  useEffect(() => {
    const region = {
      ...calculateAverageLocation(vehicles),
      ...(vehicles.length === 1 ? DELTA_FOR_SNGLE_CAR : DELTA_FOR_SEVERAL_CARS),
    };
    ref.current?.animateToRegion(region, ANIMATION_DURATION);
  }, [vehicles]);

  return (
    <MapView ref={ref} style={styles.map} initialRegion={INITIAL_REGION}>
      {vehicles.map((v) => (
        <Marker
          key={v.id}
          coordinate={v.location}
          pinColor={CategoryColor[v.category]}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default VehiclesMapView;
