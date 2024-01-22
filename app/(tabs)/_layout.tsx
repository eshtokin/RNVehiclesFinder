import { Tabs } from "expo-router";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  DEFAULT_HEADER_OPTIONS,
  DEFAULT_TABS_OPTIONS,
} from "utils/screenOptions";

export default function () {
  return (
    <Tabs
      screenOptions={{ ...DEFAULT_HEADER_OPTIONS, ...DEFAULT_TABS_OPTIONS }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="car" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
