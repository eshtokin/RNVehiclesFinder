import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { Stack } from "expo-router";
import { Button } from "components";
import { resources } from "localizations/i18n";
import COLORS from "utils/colors";
import { getNextAvailableLanguage } from "utils/functions";

type SettingsProps = {};
const Settings: React.FC<SettingsProps> = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = getNextAvailableLanguage(resources, currentLanguage);
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <>
      {/* Add dinamyc option to the screen */}
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
    backgroundColor: COLORS.main,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  option: {
    fontSize: 20,
  },
  langVariant: { fontSize: 20, fontStyle: "italic" },
});

export default Settings;
