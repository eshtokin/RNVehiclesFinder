import { Stack } from "expo-router";
import DEFAULT_SCREEN_OPTIONS from "utils/screenOptions";
// use this file like entry point and do setup
import "localizations/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export default function AppLayout() {
  return (
    <QueryClientProvider client={client}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Vehicle" options={DEFAULT_SCREEN_OPTIONS} />
      </Stack>
    </QueryClientProvider>
  );
}
