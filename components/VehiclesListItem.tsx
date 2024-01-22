import { router } from "expo-router";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { Vehicle } from "types";
import Button from "components/Button";
import COLORS from "utils/colors";

type VehiclesListItemProps = Vehicle;
const VehiclesListItem: FC<VehiclesListItemProps> = (item: Vehicle) => {
  const { t } = useTranslation(undefined, { keyPrefix: "carCategories" });
  const navigateToVehicleDetails = () =>
    router.push({
      pathname: "Vehicle",
      params: { id: item.id },
    });

  return (
    <Button onPress={navigateToVehicleDetails}>
      <View style={{ maxHeight: 85 }}>
        <View style={styles.topRowInfo}>
          <Text style={styles.category}>{t(`${item.category}`)}</Text>
          <Text style={styles.title}>{`${item.brand} #${item.id}`}</Text>
        </View>
        <Text style={styles.name}>{item.driver.name}</Text>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  pressedContainer: {
    backgroundColor: COLORS.pressedColor,
  },
  topRowInfo: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
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
