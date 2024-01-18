import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";
import { Category } from "../types";

type VehicleProps = {};
const Vehicle: React.FC<VehicleProps> = () => {
  const params = useLocalSearchParams<{
    brand: string;
    category: Category;
    driverName: string;
  }>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>{params.brand}</Text>
        <Text>{params.driverName}</Text>
        <Text>{params.category}</Text>
      </View>
    </View>
  );
};

export default Vehicle;
