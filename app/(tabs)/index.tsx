import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";
import {
  CategoryFilter,
  ChangeViewButton,
  VehiclesListView,
  VehiclesMapView,
} from "components";
import { useVehiclesData } from "hooks";
import COLORS from "utils/colors";

const VehicleListScreen = () => {
  const { t } = useTranslation();
  const { vehicles, category, selectCategory } = useVehiclesData();
  const [isMapView, setMapView] = useState(false);

  const changeView = () => setMapView((mw) => !mw);

  return (
    <>
      {/* setup dinamyc options for current screen */}
      <Tabs.Screen
        options={{
          title: t("vehicles.screenTitle"),
          headerRight: () => (
            <ChangeViewButton isMapView={isMapView} onPress={changeView} />
          ),
        }}
      />
      <View style={styles.container}>
        <CategoryFilter category={category} selectCategory={selectCategory} />
        {isMapView ? (
          <VehiclesMapView vehicles={vehicles} />
        ) : (
          <VehiclesListView vehicles={vehicles} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  viewButton: {
    width: 200,
    padding: 5,
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
  },
});

export default VehicleListScreen;
