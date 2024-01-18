import { router } from "expo-router";
import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Vehicle } from "../types";

type VehiclesListItemProps = Vehicle;
const VehiclesListItem: FC<VehiclesListItemProps> = (item: Vehicle) => {
  return (
    <Pressable
      style={styles.container}
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
    backgroundColor: "white",
    padding: 20,
    gap: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      height: 2,
      width: -2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
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
