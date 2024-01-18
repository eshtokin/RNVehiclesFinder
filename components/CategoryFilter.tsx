import { View, StyleSheet } from "react-native";
import CategoryButton from "./CategoryButton";
import { Category } from "../types";

type CategoryFilterProps = {
  category: Category;
  selectCategory: (category: Category) => void;
};
const CategoryFilter: React.FC<CategoryFilterProps> = ({
  category,
  selectCategory,
}) => {
  return (
    <View style={styles.container}>
      <CategoryButton
        active={category === null}
        title={"all"}
        onPress={() => selectCategory(null)}
      />
      <CategoryButton
        title={Category.cargo}
        active={category === Category.cargo}
        onPress={() => selectCategory(Category.cargo)}
      />
      <CategoryButton
        title={Category.passenger}
        active={category === Category.passenger}
        onPress={() => selectCategory(Category.passenger)}
      />
      <CategoryButton
        title={Category.special}
        active={category === Category.special}
        onPress={() => selectCategory(Category.special)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default CategoryFilter;
