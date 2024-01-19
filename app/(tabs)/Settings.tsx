import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

type SettingsProps = {};
const Settings: React.FC<SettingsProps> = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const switchLanguage = () => {
    const nLng = currentLanguage === "ru" ? "en" : "ru";
    changeLanguage(nLng);
    setCurrentLanguage(nLng);
  };

  return (
    <View style={styles.container}>
      <Text>{currentLanguage}</Text>
      <Button title="change" onPress={switchLanguage} />
      <Text>{t("Welcome to React")}</Text>
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
