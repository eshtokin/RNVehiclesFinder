import { StyleSheet } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { CategoryColor, Vehicle } from "../types";

type VehiclesMapViewProps = { vehicles: Vehicle[] };
const VehiclesMapView: React.FC<VehiclesMapViewProps> = ({ vehicles }) => {
  const initialRegion: Region = {
    latitude: 45.5,
    longitude: 39,
    longitudeDelta: 6,
    latitudeDelta: 6,
  };

  return (
    <MapView style={styles.map} initialRegion={initialRegion}>
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
