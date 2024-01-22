import COLORS from "./colors";
import SHARED_STYLES from "./styles";

export const DEFAULT_HEADER_OPTIONS = {
  headerShown: true,
  headerTitleStyle: SHARED_STYLES.headerTitle,
  headerRightContainerStyle: SHARED_STYLES.headerRightContainer,
};

export const DEFAULT_TABS_OPTIONS = {
  tabBarLabelStyle: SHARED_STYLES.tabBarLabel,
  tabBarActiveTintColor: COLORS.secondary,
  tabBarInactiveTintColor: COLORS.secondaryTransparent,
  tabBarShowLabel: false,
};
