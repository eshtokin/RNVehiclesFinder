import { FC } from "react";
import { Text, StyleSheet } from "react-native";
import COLORS from "utils/colors";
import Button from "./Button";

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
    <Button onPress={onPress}>
      <Text style={[styles.title, active && { color }]}>{title}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: COLORS.secondary,
    marginHorizontal: 10,
  },
});

export default CategoryButton;
