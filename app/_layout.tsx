import { Stack } from "expo-router";
import { DEFAULT_SCREEN_OPTIONS } from "utils";
import "localizations/i18n";

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Vehicle" options={DEFAULT_SCREEN_OPTIONS} />
    </Stack>
  );
}
