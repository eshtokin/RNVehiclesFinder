import { FC } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import COLORS from "utils/colors";
import SHARED_STYLES from "utils/styles";

const inactiveColor = COLORS.main;

type CategoryButtonProps = {
  title: string;
  color?: string;
  active?: boolean;
  onPress: () => void;
};
const CategoryButton: FC<CategoryButtonProps> = ({
  title,
  color = "black",
  active = false,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.pressedContainer : SHARED_STYLES.shadowShape,
        active && { borderColor: color },
      ]}
    >
      <Text style={[styles.title, active && { color }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.secondaryTransparent,
    backgroundColor: inactiveColor,
  },
  pressedContainer: {
    backgroundColor: COLORS.pressedColor,
  },
  title: {
    fontSize: 20,
    color: COLORS.secondary,
  },
});

export default CategoryButton;
