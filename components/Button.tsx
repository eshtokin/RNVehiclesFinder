import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { COLORS } from "utils";

type ButtonProps = { title: string } & PressableProps;
const Button: React.FC<ButtonProps> = ({ title, ...pressableProps }) => {
  return (
    <Pressable {...pressableProps}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.secondaryTransparent,
    padding: 10,
  },
});

export default Button;
