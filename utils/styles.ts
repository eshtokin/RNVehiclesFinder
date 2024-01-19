import { StyleSheet } from "react-native";

const SHARED_STYLES = StyleSheet.create({
  shadowShape: {
    shadowOffset: {
      height: 2,
      width: -2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
});

export default SHARED_STYLES;
