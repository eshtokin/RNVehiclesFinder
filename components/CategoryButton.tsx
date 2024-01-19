import { FC } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { CategoryColor } from "../types";
import { COLORS, SHARED_STYLES } from "utils";

const inactiveColor = COLORS.main;

type CategoryButtonProps = {
  title: string;
  onPress: () => void;
  active?: boolean;
};
const CategoryButton: FC<CategoryButtonProps> = ({
  onPress,
  title,
  active = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.pressedContainer : SHARED_STYLES.shadowShape,
        active && {
          borderColor: CategoryColor[title],
        },
      ]}
    >
      <Text style={[styles.title, active && { color: CategoryColor[title] }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.secondaryTransparent,
    backgroundColor: inactiveColor,
  },
  pressedContainer: {
    backgroundColor: COLORS.pressedColor,
  },
  title: { fontSize: 20, color: COLORS.secondary },
});

export default CategoryButton;
