import { Stack } from "expo-router";
import { DEFAULT_HEADER_OPTIONS } from "utils/screenOptions";
import { QueryClientProvider } from "@tanstack/react-query";
// use this file like entry point and do global setup
import "localizations/i18n";
import client from "api";

export default function AppLayout() {
  return (
    <QueryClientProvider client={client}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="vehicle_details"
          options={{
            ...DEFAULT_HEADER_OPTIONS,
            headerTitle: "Vehicle details",
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
