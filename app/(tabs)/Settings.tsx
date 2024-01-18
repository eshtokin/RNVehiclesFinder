import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type SettingsProps = {};
const Settings: React.FC<SettingsProps> = () => {
  const [isEnglishLng, setIsEnglishLng] = useState(true);
  return (
    <View style={styles.container}>
      <Text>Language: {isEnglishLng ? "true" : "false"}</Text>
      <Button title="change" onPress={() => setIsEnglishLng((lng) => !lng)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Settings;
