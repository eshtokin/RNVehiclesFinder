import { VehiclesMapView } from "components";
import { useLocalSearchParams } from "expo-router";
import { useVehicleDetails } from "hooks";
import { View, Text, StyleSheet, Button } from "react-native";

// 5. Кнопка “Позвонить”. Открывает приложение с набором номера и уже подставленным номером водителя;
// 6. Кнопка “Написать”. Открывает приложение whatsapp с чатом водителя и предустановленным сообщением: “Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе”.

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
        <View>
          <Text style={styles.title}>{vehicle.driver.name}</Text>
          <Text style={styles.phone}>{vehicle.driver.phone}</Text>
        </View>
        <Text style={styles.category}>{vehicle.category}</Text>
      </View>
      <Button title="call" onPress={() => {}} />
      <Button title="message" onPress={() => {}} />
      <View style={styles.mapWrapper}>
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
  phone: { fontSize: 18 },
  category: {
    fontSize: 18,
    fontStyle: "italic",
  },
  mapWrapper: {
    flex: 1,
    width: "100%",
    height: "70%",
    backgroundColor: "white",
    borderRadius: 40,
    overflow: "hidden",
    zIndex: 100,
  },
});

export default Vehicle;
