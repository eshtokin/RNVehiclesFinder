import React, { FC } from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import COLORS from "utils/colors";

type ChangeViewButtonProps = {
  isMapView: boolean;
  onPress: () => void;
};
const ChangeViewButton: FC<ChangeViewButtonProps> = ({
  onPress,
  isMapView,
}) => (
  <Pressable onPress={onPress}>
    {isMapView ? (
      <FontAwesome name="list" size={24} color={COLORS.secondary} />
    ) : (
      <FontAwesome name="map-marker" size={24} color={COLORS.secondary} />
    )}
  </Pressable>
);

export default ChangeViewButton;
