import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
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
  const { vehicles, isLoading, error, category, selectCategory } =
    useVehiclesData();

  const [isMapView, setMapView] = useState(false);
  const changeView = () => setMapView(!isMapView);

  return (
    <>
      {/* add dinamyc option to the screen */}
      <Tabs.Screen
        options={{
          title: t("vehicles.screenTitle"),
          headerRight: () => (
            <ChangeViewButton isMapView={isMapView} onPress={changeView} />
          ),
        }}
      />
      <View style={[styles.container, styles.centered]}>
        {isLoading ? (
          <Text style={styles.text}>{t("common.loading")}...</Text>
        ) : error ? (
          <Text style={styles.text}>{t("common.error")}</Text>
        ) : (
          <View style={styles.container}>
            <CategoryFilter
              category={category}
              selectCategory={selectCategory}
            />
            {isMapView ? (
              <VehiclesMapView vehicles={vehicles} />
            ) : (
              <VehiclesListView vehicles={vehicles} />
            )}
          </View>
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
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default VehicleListScreen;
