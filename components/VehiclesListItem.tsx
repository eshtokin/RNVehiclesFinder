import { router } from "expo-router";
import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Vehicle } from "../types";
import { COLORS, SHARED_STYLES } from "utils";

type VehiclesListItemProps = Vehicle;
const VehiclesListItem: FC<VehiclesListItemProps> = (item: Vehicle) => {
  const navigateToVehicleDetails = () =>
    router.push({
      pathname: "Vehicle",
      params: { id: item.id },
    });

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.pressedContainer : SHARED_STYLES.shadowShape,
      ]}
      onPress={navigateToVehicleDetails}
    >
      <View style={styles.topRowInfo}>
        <Text style={styles.title}>{`${item.brand} #${item.id}`}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
      <Text style={styles.name}>{item.driver.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.main,
    padding: 20,
    gap: 10,
    borderWidth: 1,
    borderColor: COLORS.secondaryTransparent,
    borderRadius: 10,
  },
  pressedContainer: { backgroundColor: COLORS.pressedColor },
  topRowInfo: {
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
  name: {
    fontSize: 16,
  },
});

export default VehiclesListItem;
