import { StyleSheet } from "react-native";

const SHARED_STYLES = StyleSheet.create({
  headerTitle: { fontSize: 22 },
  headerRightContainer: { right: 20 },
  tabbarLabel: { fontSize: 15 },
  shadowShape: {
    shadowColor: "black",
    shadowOffset: {
      height: 3,
      width: -2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 8,
  },
});

export default SHARED_STYLES;
