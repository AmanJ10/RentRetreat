import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Modal from "./modals/Modal";
import { useLogin } from "./contexts/LoginProvider";
import Description from "./Description";
import HouseRules from "./HouseRules";
import { perksList, places } from "./constants/index.jsx";
import Price from "./Price.jsx";
import ImageSlider from "./ImageSlider";
import { useUsers } from "./contexts/UserContext.jsx";
import axios from "axios";

function SamplePlaces() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [bookingInfo, setBookingInfo] = useState(null);
  const [isImageSliderOpen, setImageSliderOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const { isModalOpen, handleOpen, handleClose, modalType } = useLogin();
  const { user } = useUsers();

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const placeData = places.find((p) => p.id === id);
        if (placeData) {
          setPlace(placeData);
        } else {
          const response = await axios.get(
            `http://localhost:4000/bookings/${id}`
          );
          setPlace(response.data);
          setBookingInfo(response.data);
        }
      } catch (error) {
        console.error("Error fetching place details:", error);
      }
    };

    fetchPlace();
  }, [id]);

  useEffect(() => {
    if (place) {
      setCurrentImages(place.photos || []);
    }
  }, [place]);

  if (!place) return <div>Loading...</div>;

  function handleShowMore() {
    handleOpen("description");
  }

  function handleImageClick() {
    setImageSliderOpen(true);
  }

  function handleImageSliderClose() {
    setImageSliderOpen(false);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">
        {place.title}
      </h1>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          {place.photos && place.photos.length > 0 ? (
            <img
              src={place.photos[0]}
              alt={place.title}
              className="w-full h-96 object-cover bg-center rounded-2xl cursor-pointer"
              onClick={handleImageClick}
            />
          ) : (
            <div className="w-full h-96 bg-gray-200 rounded-2xl"></div>
          )}
        </div>

        <div className="flex-1 mt-4 md:mt-0 md:ml-4 grid grid-cols-2 gap-4">
          {place.photos.slice(1).map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`${place.title} - ${index + 1}`}
              onClick={handleImageClick}
              className="w-full h-48 object-cover bg-center rounded-2xl cursor-pointer"
            />
          ))}
          {place.photos.length < 2 && (
            <div className="w-full h-48 bg-transparent"></div>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 pt-5 tracking-tight">
          {place.name}
        </h2>
      </div>

      <div className="pb-5 flex items-center text-gray-700">
        <span className="text-xl">{place.maxGuests} guests</span>
        <span className="mx-2">•</span>
        <span className="text-xl">{place.bedrooms} bedrooms</span>
        <span className="mx-2">•</span>
        <span className="text-xl">{place.beds} beds</span>
        <span className="mx-2">•</span>
        <span className="text-xl">{place.bathrooms} bathrooms</span>
      </div>

      <div className="my-4 border-t border-gray-200"></div>
      <div className="mt-4 flex items-center">
        <div className="hidden md:block flex-shrink-0">
          <Avatar />
        </div>
        <p className="p-2 text-lg text-gray-800 leading-relaxed">
          Hosted by Kohli
        </p>
      </div>
      <div className="my-4 border-t border-gray-200"></div>

      <div className="mt-8 pb-2 rounded-lg">
        <p className="text-lg text-gray-800 leading-relaxed">
          {place.description}
        </p>
        <p
          className="text-lg font-bold underline text-gray-800 leading-relaxed cursor-pointer"
          onClick={handleShowMore}
        >
          Show More
        </p>
        {isModalOpen && modalType === "description" && (
          <Modal
            isOpen={isModalOpen}
            onClose={handleClose}
            title="Description"
            body={<Description place={place} />}
          />
        )}
      </div>

      <div className="my-4 border-t border-gray-200"></div>

      <div>
        <p className="text-xl font-semibold mt-8">What this place offers</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pb-2">
          {place.perks.map((perk, index) => {
            const perkItem = perksList.find((item) => item.name === perk);
            return perkItem ? (
              <li
                key={index}
                className="flex items-center text-gray-700 space-x-2 text-2xl"
              >
                <span className="flex-shrink-0">{perkItem.svg}</span>
                <span>{perkItem.name}</span>
              </li>
            ) : null;
          })}
        </ul>
      </div>
      <div className="my-4 border-t border-gray-200"></div>
      <HouseRules place={place} />

      {user ? (
        <Price
          price={place.pricePerNight}
          place={place}
          bookingInfo={bookingInfo}
        />
      ) : (
        <>
          <h1 className="text-3xl pt-10 pb-5 text-center font-bold text-gray-800 leading-relaxed cursor-pointer">
            Book Now
          </h1>
          <h2
            className="text-lg font-bold text-center underline text-gray-800 leading-relaxed cursor-pointer"
            onClick={() => handleOpen("login")}
          >
            Please Login first
          </h2>
        </>
      )}

      <ImageSlider
        images={currentImages}
        isOpen={isImageSliderOpen}
        onClose={handleImageSliderClose}
      />
    </div>
  );
}

export default SamplePlaces;