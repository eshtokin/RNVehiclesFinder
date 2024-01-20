import { ScrollView, StyleSheet } from "react-native";
import CategoryButton from "./CategoryButton";
import { Category, CategoryColor } from "../types";
import COLORS from "utils/colors";
import { useTranslation } from "react-i18next";

type CategoryFilterProps = {
  category: Category;
  selectCategory: (category: Category) => void;
};
const CategoryFilter: React.FC<CategoryFilterProps> = ({
  category,
  selectCategory,
}) => {
  const { t } = useTranslation();
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <CategoryButton
        active={category === null}
        title={t("carCategories." + Category.all)}
        color={CategoryColor[Category.all]}
        onPress={() => selectCategory(null)}
      />
      <CategoryButton
        title={t("carCategories." + Category.cargo)}
        active={category === Category.cargo}
        color={CategoryColor[Category.cargo]}
        onPress={() => selectCategory(Category.cargo)}
      />
      <CategoryButton
        title={t("carCategories." + Category.passenger)}
        active={category === Category.passenger}
        color={CategoryColor[Category.passenger]}
        onPress={() => selectCategory(Category.passenger)}
      />
      <CategoryButton
        title={t("carCategories." + Category.special)}
        active={category === Category.special}
        color={CategoryColor[Category.special]}
        onPress={() => selectCategory(Category.special)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.main,
    borderBottomWidth: 1,
    borderColor: COLORS.secondaryTransparent,
  },
  content: {
    paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 15,
    gap: 10,
  },
});

export default CategoryFilter;
