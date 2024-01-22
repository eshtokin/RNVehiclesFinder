import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { useLocalSearchParams } from "expo-router";
import { FontAwesome, Foundation } from "@expo/vector-icons";
import { useVehicleDetails } from "hooks";
import { Button, VehiclesMapView } from "components";
import { sendMessageWithWhatsapp } from "utils/functions";

type VehicleProps = {};
const Vehicle: React.FC<VehicleProps> = () => {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams();
  const vehicle = useVehicleDetails(Number(id));

  const openWhatsApp = () => sendMessageWithWhatsapp();

  const openPhone = () => makeExternallCall();

  if (vehicle === null) {
    return <Text style={styles.title}>{t("common.loading")}...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topRowInfo}>
        <View>
          <Text style={styles.title}>{vehicle.driver.name}</Text>
          <Text style={styles.phone}>{vehicle.driver.phone}</Text>
        </View>
        <Text style={styles.category}>
          {t(`carCategories.${vehicle.category}`)}
        </Text>
      </View>
      <View style={styles.messengerButtons}>
        <Button onPress={openPhone}>
          <Foundation
            name="telephone"
            size={24}
            color="black"
            style={styles.contactIcon}
          />
        </Button>
        <Button onPress={openWhatsApp}>
          <FontAwesome
            name="whatsapp"
            size={24}
            color="black"
            style={styles.contactIcon}
          />
        </Button>
      </View>
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
  messengerButtons: {
    width: "100%",
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  contactIcon: {
    padding: 10,
  },
});

export default Vehicle;
function makeExternallCall() {
  throw new Error("Function not implemented.");
}
