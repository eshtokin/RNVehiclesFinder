import { FC, PropsWithChildren } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import COLORS from "utils/colors";
import SHARED_STYLES from "utils/styles";

type ButtonProps = {
  onPress: () => void;
  title?: string;
} & PropsWithChildren;

const Button: FC<ButtonProps> = ({ onPress, ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.pressedContainer : SHARED_STYLES.shadow,
      ]}
      onPress={onPress}
    >
      {rest.title ? (
        <Text style={styles.title}>{rest?.title}</Text>
      ) : (
        rest.children
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.main,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.secondaryTransparent,
  },
  pressedContainer: {
    backgroundColor: COLORS.pressedColor,
  },
  title: {
    margin: 10,
    fontSize: 16,
  },
});

export default Button;
