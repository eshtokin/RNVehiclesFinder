import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTranslation } from "react-i18next";
import { COLORS, SHARED_STYLES } from "utils";
import { Button } from "components";
import { Stack } from "expo-router";

// Должен содержать только возможность переключение языков с английского на русский
// и наоборот.

type SettingsProps = {};
const Settings: React.FC<SettingsProps> = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const switchLanguage = () => {
    const nextLanguage = currentLanguage === "ru" ? "en" : "ru";
    changeLanguage(nextLanguage);
    setCurrentLanguage(nextLanguage);
  };

  return (
    <>
      <Stack.Screen options={{ title: t("settings.screenTitle") }} />
      <View style={styles.container}>
        <View style={styles.row}>
          <View>
            <Text style={styles.option}>
              {t("settings.labels.currentLanguage")}:
            </Text>
            <Text style={styles.langVariant}>{t("language")}</Text>
          </View>
          <Button
            title={t("settings.labels.change")}
            onPress={switchLanguage}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.main,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 100,
    flex: 1,
    justifyContent: "space-between",
  },
  option: {
    fontSize: 20,
  },
  langVariant: { fontSize: 20, fontStyle: "italic" },
});

export default Settings;
