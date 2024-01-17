import { FC, useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import { Category, Vehicle } from "../types";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import MapView, { Marker, Region } from "react-native-maps";

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
  const [mapView, setMapView] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        gap: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          paddingTop: 15,
          justifyContent: "center",
        }}
      >
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
      {mapView ? (
        <MapViewComponent vehicles={vehicles} />
      ) : (
        <ListView vehicles={vehicles} selectCategory={selectCategory} />
      )}
      <Pressable
        onPress={() => setMapView((mv) => !mv)}
        style={{
          width: 200,
          padding: 5,
          backgroundColor: "#aaa",
          borderRadius: 5,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Text>{mapView ? "checkout to list" : "checkout to map"}</Text>
      </Pressable>
    </View>
  );
};

type MapViewProps = { vehicles: Vehicle[] };
const MapViewComponent: React.FC<MapViewProps> = ({ vehicles }) => {
  const getPinColor = (category: Category) => {
    return category === Category.Cargo
      ? "red"
      : category === Category.Passenger
      ? "blue"
      : "green";
  };
  const initialRegion: Region = {
    latitude: 45.5,
    longitude: 39,
    longitudeDelta: 6,
    latitudeDelta: 6,
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {vehicles.map((v) => {
          return (
            <Marker
              key={v.id}
              coordinate={v.location}
              pinColor={getPinColor(v.category)}
            />
          );
        })}
      </MapView>
    </View>
  );
};
const d = Dimensions.get("screen");
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
