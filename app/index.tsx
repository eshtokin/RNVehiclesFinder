import { FC, useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Category, Vehicle } from "../types";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
// import MapView from "react-native-maps";

async function getVehicles(): Promise<Vehicle[]> {
  return require("./../data/mock-data.json");
}

function useVehicleData() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [category, setCategory] = useState<Category | null>(null);

  const getVehicleByCategory = (
    vehicles: Vehicle[],
    category: Category
  ): Vehicle[] => vehicles.filter((v) => v.category === category);

  const selectCategory = (selectedCategory: Category | null) =>
    setCategory(selectedCategory);

  useEffect(() => {
    getVehicles().then(setVehicles).catch(console.log);
  }, []);

  useEffect(() => {
    getVehicles()
      .then((data) => {
        const vehicles =
          category === null ? data : getVehicleByCategory(data, category);
        setVehicles(vehicles);
      })
      .catch(console.log);
  }, [category]);

  return { vehicles, selectCategory };
}

const VehicleListScreen = () => {
  const { vehicles, selectCategory } = useVehicleData();
  const [mapView, setMapView] = useState(false);
  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      {mapView ? (
        <MapViewComponent />
      ) : (
        <ListView vehicles={vehicles} selectCategory={selectCategory} />
      )}
      <Pressable onPress={() => setMapView((mv) => !mv)}>
        <Text>{mapView ? "checkout to list" : "checkout to map"}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

type MapViewProps = {};
const MapViewComponent: React.FC<MapViewProps> = () => {
  return (
    <View style={styles.container}>{/* <MapView style={styles.map} /> */}</View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

type ListViewProps = {
  vehicles: Vehicle[];
  selectCategory: (category: Category | null) => void;
};
const ListView: React.FC<ListViewProps> = ({ vehicles, selectCategory }) => {
  return (
    <>
      <View style={{ flexDirection: "row", gap: 10, paddingTop: 15 }}>
        <CategoryButton
          title={Category.Cargo}
          onPress={() => selectCategory(Category.Cargo)}
        />
        <CategoryButton
          title={Category.Passenger}
          onPress={() => selectCategory(Category.Passenger)}
        />
        <CategoryButton
          title={Category.Special}
          onPress={() => selectCategory(Category.Special)}
        />
        <CategoryButton title={"x"} onPress={() => selectCategory(null)} />
      </View>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ borderWidth: 1, borderRadius: 15, padding: 10 }}>
            <Text>{`${item.brand} #${item.id}`}</Text>
            <Text>{item.driver.name}</Text>
            <Text>{item.category}</Text>
          </View>
        )}
        contentContainerStyle={{ gap: 10 }}
      />
    </>
  );
};

const CategoryButton: FC<{ title: string; onPress: () => void }> = ({
  onPress,
  title,
}) => (
  <Pressable
    onPress={onPress}
    style={{ backgroundColor: "#aaa", borderRadius: 10, padding: 10 }}
  >
    <Text style={{ fontSize: 20 }}>{title}</Text>
  </Pressable>
);

export default VehicleListScreen;
