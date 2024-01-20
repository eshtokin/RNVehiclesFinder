import { FC, PropsWithChildren } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { COLORS, SHARED_STYLES } from "utils";

type ButtonProps = {
  onPress: () => void;
  title?: string;
} & PropsWithChildren;

const Button: FC<ButtonProps> = ({ onPress, ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.pressedContainer : SHARED_STYLES.shadowShape,
      ]}
      onPress={onPress}
    >
      {rest.title ? <Text>{rest?.title}</Text> : rest.children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.main,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.secondaryTransparent,
    borderRadius: 10,
  },
  pressedContainer: {
    backgroundColor: COLORS.pressedColor,
  },
});

export default Button;