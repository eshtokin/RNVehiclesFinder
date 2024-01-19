import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type SettingsProps = {};
const Settings: React.FC<SettingsProps> = () => {
  const [currentLanguage, setCurrentLanguage] = useState("ru");

  return (
    <View style={styles.container}>
      <Text>{currentLanguage}</Text>
      <Button title="change" onPress={() => {}} />
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
