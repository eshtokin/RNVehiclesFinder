import { ScrollView, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import CategoryButton from "./CategoryButton";
import { CATEGORIES_LIST, Category, CategoryColor } from "types";
import { COLORS } from "utils";

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
    borderBottomWidth: 1,
    borderColor: COLORS.secondaryTransparent,
    backgroundColor: COLORS.main,
  },
  content: {
    padding: 15,
    gap: 10,
  },
});

export default CategoryFilter;
