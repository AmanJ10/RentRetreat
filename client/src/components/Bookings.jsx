import { useNavigate } from "react-router-dom";

function Bookings({ places }) {
  const navigate = useNavigate();

  function handleOnClick(placeId) {
    navigate(`/bookings/${placeId}`);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-8">
      {places.map((place) => (
        <div
          key={place._id}
          className="relative overflow-hidden shadow-lg rounded-lg project-card transform transition-transform duration-200 hover:scale-105"
          onClick={() => handleOnClick(place._id)}
        >
          <div className="p-2">
            <div className="relative">
              <img
                src={place.photos[0]}
                alt={place.title}
                className="w-full h-48 object-cover bg-center rounded-2xl pt-2"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{place.title}</h2>
              <p className="text-gray-600">{place.address}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bookings;
