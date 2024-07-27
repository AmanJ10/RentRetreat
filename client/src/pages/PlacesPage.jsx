import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Perks from "../components/Perks";
import axios from "axios";
import Places from "../components/Places";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";

function PlacesPage() {
  const { action } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [perks, setPerks] = useState([]);
  const [description, setDescription] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [extraInfo, setExtraInfo] = useState("");
  const [places, setPlaces] = useState([]);
  const [bedrooms, setBedrooms] = useState("");
  const [beds, setBeds] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [pricePerNight, setPricePerNighT] = useState(null);
  const [tagLine, setTagline] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCheckInChange = (e) => setCheckIn(e.target.value);
  const handleCheckOutChange = (e) => setCheckOut(e.target.value);
  const handleExtraInfoChange = (e) => setExtraInfo(e.target.value);
  const handleGuestsChange = (e) => setMaxGuests(e.target.value);
  const handleBedroomChange = (e) => setBedrooms(e.target.value);
  const handleBedChange = (e) => setBeds(e.target.value);
  const handleBathroomChange = (e) => setBathrooms(e.target.value);
  const handlePriceChange = (e) => setPricePerNighT(e.target.value);
  const handleTaglineChange = (e) => setTagline(e.target.value);

  async function createPlace(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/addPlace", {
        title,
        address,
        addedPhotos,
        // rating,
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests,
        bedrooms,
        beds,
        bathrooms,
        pricePerNight,
        tagLine,
      })
      .then(() => {
        alert("Place Added");
        navigate("/account/places");
      })
      .catch(() => {
        alert("Place Adding Failed");
      });
  }

  const uploadPhoto = async (e) => {
    const files = Array.from(e.target.files);

    const promises = files.map(async (file) => {
      const storageRef = ref(storage, `images/${Date.now()}-${file.name}`);
      await uploadBytes(storageRef, file);
      const url = getDownloadURL(storageRef);
      return url;
    });

    const uploadedFiles = await Promise.all(promises);
    setAddedPhotos((prev) => [...prev, ...uploadedFiles]);
  };

  const fetchPlaces = async () => {
    try {
      const response = await axios.get("http://localhost:4000/places");
      console.log("Places fetched:", response.data);
      setPlaces(response.data);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <div>
      {action !== "new" ? (
        <>
          <Places places={places} />
          <div className="text-center pb-8">
            <Link
              className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
              to={"/account/places/new"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add new place
            </Link>
          </div>
        </>
      ) : (
        <div>
          <form className="ml-3 mr-3" onSubmit={createPlace}>
            <h2 className="text-2xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">
              Title for your place should be short and catchy as in an
              advertisement.
            </p>
            <input
              className="w-full border my-1 py-2 px-3 rounded-2xl"
              type="text"
              placeholder="Title, for example: My lovely apt"
              value={title}
              onChange={handleTitleChange}
            />
            <h2 className="text-2xl mt-4">Tagline</h2>

            <p className="text-gray-500 text-sm">
              eg: Entire villa in Kamshet, India
            </p>
            <input
              className="w-full border my-1 py-2 px-3 rounded-2xl"
              type="text"
              placeholder="Title, for example: My lovely apt"
              value={tagLine}
              onChange={handleTaglineChange}
            />
            <h2 className="text-2xl mt-4">Address</h2>
            <p className="text-gray-500 text-sm">Address to this place</p>
            <input
              className="w-full border my-1 py-2 px-3 rounded-2xl"
              type="text"
              placeholder="Address"
              value={address}
              onChange={handleAddressChange}
            />
            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">
              more = better (Add 4+ photos)
            </p>

            <div className="mt-2 gap-2 grid grid-cols-3 md:grid-cols:4 lg:grid-cols-6">
              {addedPhotos.length > 0 &&
                addedPhotos.map((link) => (
                  // eslint-disable-next-line react/jsx-key
                  <div className="h-32 flex">
                    <img
                      className="rounded-2xl w-full object-cover"
                      src={link}
                    />
                  </div>
                ))}
              <label className="h-32 flex justify-center cursor-pointer items-center gap-1 border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={uploadPhoto}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                  />
                </svg>
                Upload
              </label>
            </div>
            <h2 className="text-2xl mt-4">Description</h2>
            <p className="text-gray-500 text-sm">Description of the place</p>
            <textarea
              className="w-full border my-1 py-2 px-3 rounded-2xl"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>

            <h2 className="text-2xl mt-4">Perks</h2>
            <p className="text-gray-500 text-sm">
              Select all the Perks of your place
            </p>
            <Perks selected={perks} onChange={setPerks} />

            <h2 className="text-2xl mt-4">Extra Info</h2>
            <p className="text-gray-500 text-sm">House rules, etc.</p>
            <textarea
              className="w-full border my-1 py-2 px-3 rounded-2xl"
              value={extraInfo}
              onChange={handleExtraInfoChange}
            ></textarea>

            <h2 className="text-2xl mt-4">Pricing</h2>
            <p className="text-gray-500 text-sm">Price per night for stay</p>
            <input
              className="w-full border my-1 py-2 px-3 rounded-2xl"
              type="number"
              placeholder=""
              value={pricePerNight}
              onChange={handlePriceChange}
            />

            <h2 className="text-2xl mt-4">Check in&out times</h2>
            <p className="text-gray-500 text-sm">
              add check in and out times, remember to have some time window for
              cleaning the room between guests.
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1 ">Check In Time</h3>
                <input
                  className="w-full border my-1 py-2 px-3 rounded-2xl"
                  type="text"
                  placeholder="14:00"
                  value={checkIn}
                  onChange={handleCheckInChange}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1 ">Check Out Time</h3>
                <input
                  className="w-full border my-1 py-2 px-3 rounded-2xl"
                  type="text"
                  placeholder="11"
                  value={checkOut}
                  onChange={handleCheckOutChange}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1 ">Max number of guests</h3>
                <input
                  className="w-full border my-1 py-2 px-3 rounded-2xl"
                  type="number"
                  value={maxGuests}
                  onChange={handleGuestsChange}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1 ">Bedrooms</h3>
                <input
                  className="w-full border my-1 py-2 px-3 rounded-2xl"
                  type="number"
                  value={bedrooms}
                  onChange={handleBedroomChange}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1 ">Beds</h3>
                <input
                  className="w-full border my-1 py-2 px-3 rounded-2xl"
                  type="number"
                  value={beds}
                  onChange={handleBedChange}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1 ">Bathrooms</h3>
                <input
                  className="w-full border my-1 py-2 px-3 rounded-2xl"
                  type="number"
                  value={bathrooms}
                  onChange={handleBathroomChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 bg-primary w-full mb-4 text-white text-center py-2 px-6 rounded-2xl"
            >
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PlacesPage;
