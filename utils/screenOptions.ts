import COLORS from "./colors";
import SHARED_STYLES from "./styles";

const DEFAULT_SCREEN_OPTIONS = {
  // header
  headerShown: true,
  headerTitleStyle: SHARED_STYLES.headerTitle,
  headerRightContainerStyle: SHARED_STYLES.headerRightContainer,
  // tabbar
  tabBarLabelStyle: SHARED_STYLES.tabbarLabel,
  tabBarActiveTintColor: COLORS.secondary,
  tabBarInactiveTintColor: COLORS.secondaryTransparent,
  //label
  tabBarShowLabel: false,
};

export default DEFAULT_SCREEN_OPTIONS;
