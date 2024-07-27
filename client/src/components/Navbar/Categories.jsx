import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CategoryBox from "./CategoryBox";
import { categories, places } from "../constants/index.jsx";
import Container from "../Container";

function Categories() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Amazing Views");
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    const categoryFromUrl = new URLSearchParams(location.search).get(
      "category"
    );

    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory("Amazing Views");
    }
  }, [location]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = places.filter(
        (place) =>
          place.category && place.category.toLowerCase() === "amazing views"
      );
      setFilteredPlaces(filtered);

      const newUrl = `/category?category=${selectedCategory.toLowerCase()}`;
      window.history.pushState(null, "", newUrl);
    } else {
      setFilteredPlaces([]);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (label) => {
    setSelectedCategory(label);
    navigate(`/category?category=${label.toLowerCase()}`);
  };

  function handleOnClick(place) {
    navigate(`/splaces/${place.id}`, { state: { place } });
  }

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
      {selectedCategory && (
        <div className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-8">
            {filteredPlaces.length > 0 ? (
              filteredPlaces.map((place) => (
                <div
                  key={place.id}
                  className="relative overflow-hidden shadow-lg rounded-lg project-card transform transition-transform duration-200 hover:scale-105"
                  onClick={() => handleOnClick(place)}
                >
                  <div className="p-2">
                    <div className="relative">
                      <img
                        src={place.photos[0]}
                        alt={place.name}
                        className="w-full h-48 object-cover bg-center rounded-2xl pt-2"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{place.name}</h2>
                    <p className="text-gray-600">{place.address}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No places found in this category.</p>
            )}
          </div>
        </div>
      )}
    </Container>
  );
}

export default Categories;
