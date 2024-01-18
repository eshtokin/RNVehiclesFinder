import { Tabs } from "expo-router";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const DEFAULT_SCREEN_OPTIONS = {
  headerShown: true,
  tabBarActiveTintColor: "orange",
  tabBarInactiveTintColor: "grey",
  tabBarLabelStyle: { fontSize: 15 },
  headerRightContainerStyle: { right: 20 },
};

export default function () {
  return (
    <Tabs screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="car" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
