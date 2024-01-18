import { FlatList, StyleSheet } from "react-native";
import { Vehicle } from "../types";
import VehicleListItem from "./VehiclesListItem";

type VehiclesListProps = {
  vehicles: Vehicle[];
};
const VehiclesList: React.FC<VehiclesListProps> = ({ vehicles }) => {
  return (
    <FlatList
      data={vehicles}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <VehicleListItem {...item} />}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    gap: 10,
    padding: 15,
  },
});

export default VehiclesList;
