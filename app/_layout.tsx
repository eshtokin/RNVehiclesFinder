import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Vehicle" options={{ headerShown: true }} />
    </Stack>
  );
}
