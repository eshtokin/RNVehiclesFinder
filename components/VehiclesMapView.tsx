import { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Vehicle, CategoryColor } from "types";
import {
  DELTA_FOR_SNGLE_CAR,
  DELTA_FOR_SEVERAL_CARS,
  ANIMATION_DURATION,
  INITIAL_REGION,
} from "utils/constants";
import { calculateAverageLocation } from "utils/functions";

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
    <MapView
      ref={ref}
      style={[styles.map, StyleSheet.absoluteFill]}
      initialRegion={INITIAL_REGION}
    >
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
    zIndex: 100,
  },
});

export default VehiclesMapView;
