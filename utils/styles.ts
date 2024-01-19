import { StyleSheet } from "react-native";

const SHARED_STYLES = StyleSheet.create({
  headerTitle: { fontSize: 22 },
  headerRightContainer: { right: 20 },
  tabbarLabel: { fontSize: 15 },
  shadowShape: {
    shadowOffset: {
      height: 3,
      width: -2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
});

export default SHARED_STYLES;
