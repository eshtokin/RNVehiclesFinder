import { useState } from "react";
import { Category } from "types";
import { useQuery } from "@tanstack/react-query";
import { getAllVehicles } from "api";
import { selectVehiclesByCategory } from "utils/functions";

// create a hook for working with vehicle list
export default function useQueryVehicles() {
  const [category, setCategory] = useState<Category>(Category.all);

  const { data, error, isLoading } = useQuery({
    queryKey: ["vehicles"],
    queryFn: getAllVehicles,
    select: (data) => selectVehiclesByCategory(data, category),
  });

  return {
    vehicles: data,
    isLoading,
    error,
    category,
    selectCategory: setCategory,
  };
}
