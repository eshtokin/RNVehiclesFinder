import { ScrollView, StyleSheet, View } from "react-native";
import CategoryButton from "./CategoryButton";
import { CATEGORIES_LIST, Category, CategoryColor } from "../types";
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
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {CATEGORIES_LIST.map((c) => (
        <CategoryButton
          key={c}
          active={category === c}
          title={t("carCategories." + c)}
          color={CategoryColor[c]}
          onPress={() => selectCategory(c)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 82,
    backgroundColor: COLORS.main,
    borderBottomWidth: 1,
    borderColor: COLORS.secondaryTransparent,
  },
  content: {
    padding: 15,
    gap: 10,
  },
});

export default CategoryFilter;
