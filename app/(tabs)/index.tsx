import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { CategoryFilter, VehiclesListView, VehiclesMapView } from "components";
import { useVehiclesData } from "hooks";

const VehicleListScreen = () => {
  const { vehicles, category, selectCategory } = useVehiclesData();
  const [mapView, setMapView] = useState(false);

  const RightHeaderIcon = () => (
    <Pressable onPress={() => setMapView((mw) => !mw)}>
      {mapView ? (
        <FontAwesome name="list" size={24} color="black" />
      ) : (
        <FontAwesome name="map-marker" size={24} color="black" />
      )}
    </Pressable>
  );

  return (
    <>
      {/* setup dinamyc options for current screen */}
      <Tabs.Screen
        options={{
          title: "Vehicles",
          headerRight: RightHeaderIcon,
        }}
      />
      <View style={styles.container}>
        <CategoryFilter category={category} selectCategory={selectCategory} />
        {/* choose view without duplicated props */}
        {(mapView ? VehiclesMapView : VehiclesListView)({ vehicles })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  viewButton: {
    width: 200,
    padding: 5,
    backgroundColor: "#aaa",
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
  },
});

export default VehicleListScreen;
