import { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Vehicle, CategoryColor } from "types";
import { calculateAverageLocation } from "utils/functions";
import constants from "./../constants";

type VehiclesMapViewProps = { vehicles: Vehicle[] };
const VehiclesMapView: React.FC<VehiclesMapViewProps> = ({ vehicles }) => {
  const ref = useRef<MapView>();

  useEffect(() => {
    const region = {
      ...calculateAverageLocation(vehicles),
      ...(vehicles.length === 1
        ? constants.DELTA_FOR_SNGLE_CAR
        : constants.DELTA_FOR_SEVERAL_CARS),
    };
    ref.current?.animateToRegion(region, constants.ANIMATION_DURATION);
  }, [vehicles]);

  return (
    <MapView
      ref={ref}
      style={styles.map}
      initialRegion={constants.INITIAL_REGION}
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
  },
});

export default VehiclesMapView;
