import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import COLORS from "utils/colors";
import Button from "./Button";

type ChangeViewButtonProps = {
  isMapView: boolean;
  onPress: () => void;
};
const ChangeViewButton: FC<ChangeViewButtonProps> = ({
  onPress,
  isMapView,
}) => (
  <Button onPress={onPress}>
    <View style={styles.container}>
      <FontAwesome
        name={isMapView ? "list-ol" : "map-marker"}
        size={24}
        color={COLORS.secondary}
      />
    </View>
  </Button>
);

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});
export default ChangeViewButton;
