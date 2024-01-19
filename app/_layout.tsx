import { Stack } from "expo-router";
import { DEFAULT_SCREEN_OPTIONS } from "utils";

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Vehicle" options={DEFAULT_SCREEN_OPTIONS} />
    </Stack>
  );
}
