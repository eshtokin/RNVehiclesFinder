import { VehiclesMapView } from "components";
import { useLocalSearchParams } from "expo-router";
import { useVehicleDetails } from "hooks";
import { View, Text, StyleSheet } from "react-native";

type VehicleProps = {};
const Vehicle: React.FC<VehicleProps> = () => {
  const { id } = useLocalSearchParams();
  const vehicle = useVehicleDetails(Number(id));

  if (vehicle === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRowInfo}>
        <Text style={styles.title}>{`${vehicle.brand} #${vehicle.id}`}</Text>
        <Text style={styles.category}>{vehicle.category}</Text>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "70%",
          backgroundColor: "white",
          borderRadius: 40,
          overflow: "hidden",
          zIndex: 100,
        }}
      >
        <VehiclesMapView vehicles={[vehicle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  topRowInfo: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
  },
  category: {
    fontSize: 20,
    fontStyle: "italic",
  },
});

export default Vehicle;
