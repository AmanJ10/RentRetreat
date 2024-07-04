import { useState } from "react";
import CategoryBox from "./CategoryBox";
import { categories } from "../constants";
import Container from "../Container";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (label) => {
    setSelectedCategory(label);
  };

  return (
    <Container>
      <div className="pt-1 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((category) => (
          <CategoryBox
            key={category.name}
            icon={category.icon}
            label={category.name}
            isSelected={selectedCategory === category.name}
            onClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
