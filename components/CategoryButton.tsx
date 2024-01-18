import { FC } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { CategoryColor } from "../types";

const inactiveColor = "rgb(242, 242, 242)";

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
        pressed && styles.pressedContainer,
        active && {
          borderBottomColor: CategoryColor[title],
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
    borderBottomWidth: 2,
    borderRadius: 10,
    borderBottomColor: inactiveColor,
    backgroundColor: inactiveColor,
  },
  pressedContainer: {
    backgroundColor: "rgb(220, 220, 220)",
  },
  title: { fontSize: 20 },
});

export default CategoryButton;
