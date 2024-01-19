import { router } from "expo-router";
import { FC } from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Vehicle } from "../types";
import COLORS from "utils/colors";
import SHARED_STYES from "utils/styles";

type VehiclesListItemProps = Vehicle;
const VehiclesListItem: FC<VehiclesListItemProps> = (item: Vehicle) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.pressedContainer : SHARED_STYES.shadowShape,
      ]}
      onPress={() =>
        router.push({
          pathname: "Vehicle",
          params: {
            brand: item.brand,
            category: item.category,
            driverName: item.driver.name,
          },
        })
      }
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
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
