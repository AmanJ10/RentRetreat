import { DateRangePicker } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

function Price({ price, place, bookingInfo }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [noOfGuests, setGuests] = useState("");

  const [error, setError] = useState("");

  const [dateRange, setDateRange] = useState({
    start: parseDate("2024-04-01"),
    end: parseDate("2024-04-08"),
  });

  const handleNameChange = (e) => setName(e.target.value);
  const handleNumberChange = (e) => setPhone(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);

  const handleDateChange = (value) => {
    setDateRange(value);
  };

  const calculateDaysDifference = () => {
    if (!dateRange.start || !dateRange.end) return 0;

    const startDate = new Date(
      dateRange.start.year,
      dateRange.start.month - 1,
      dateRange.start.day
    );
    const endDate = new Date(
      dateRange.end.year,
      dateRange.end.month - 1,
      dateRange.end.day
    );

    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return daysDiff;
  };

  const totalDays = calculateDaysDifference();
  const totalPrice = totalDays * price;

  const makePayment = async (e) => {
    e.preventDefault();
    if (!name || !phone || !noOfGuests || totalDays <= 0) {
      setError("Please fill all the fields correctly.");
      return;
    }

    setError("");

    const stripe = await loadStripe(
      "pk_test_51PeqAgF6sm5E0ZdmSWlryfA2TAlq0Cz4EwCx5hoTujFmQ5Rc7hfqZFfuFbXkhbGD8F2SGrn251I8GwHRJdEUs50700JiKn7gu8"
    );

    const body = {
      product: place,
      quantity: totalDays,
      name,
      phone,
      noOfGuests,
      checkIn: place.checkIn,
      checkOut: place.checkOut,
      price: totalPrice,
      bedrooms: place.bedrooms,
      beds: place.beds,
      bathrooms: place.bathrooms,
      tagLine: place.name,
      images: place.photos,
      title: place.title,
      address: place.address,
      placesPerks: place.perks,
      description: place.description,
    };

    try {
      const res = await fetch(
        "https://rentretreat.onrender.com/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          credentials: "include",
        }
      );
      const session = await res.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error("Stripe error:", result.error.message);
      }
    } catch (error) {
      console.error("Error during payment:", error.message);
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-full mx-auto">
      <div>
        {bookingInfo ? (
          <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4 text-green-600">
              Booking Confirmed!
            </h2>
            <p className="text-lg font-semibold text-center mb-2 text-gray-800">
              Thank you for booking with us. We look forward to your stay!
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">
                  Check-in:
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  {bookingInfo.checkIn} pm
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">
                  Check-out:
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  {bookingInfo.checkOut} am
                </span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-3xl pt-10 pb-5 text-center font-bold text-gray-800 leading-relaxed cursor-pointer">
              Book Now
            </h1>
            <DateRangePicker
              label="Stay duration"
              isRequired
              defaultValue={dateRange}
              onChange={handleDateChange}
              className="max-w-xs mb-4"
            />
            <div className="text-lg font-semibold text-gray-800">
              <h2 className="text-2xl mt-4">Total Days: {totalDays}</h2>
              <h2 className="text-2xl mt-4">
                Total Price: ₹{totalPrice.toFixed(2)}
              </h2>
            </div>
            {error && (
              <div className="text-red-500 text-center mb-4">
                <p>{error}</p>
              </div>
            )}
            <form className="ml-3 mr-3" onSubmit={makePayment}>
              <h2 className="text-2xl mt-4">Name</h2>
              <input
                className="w-full border my-1 py-2 px-3 rounded-2xl"
                type="text"
                value={name}
                onChange={handleNameChange}
              />

              <h2 className="text-2xl mt-4">Phone Number</h2>
              <input
                className="w-full border my-1 py-2 px-3 rounded-2xl"
                type="text"
                value={phone}
                onChange={handleNumberChange}
              />

              <h2 className="text-2xl mt-4">Total Guests</h2>
              <input
                className="w-full border my-1 py-2 px-3 rounded-2xl"
                type="number"
                value={noOfGuests}
                onChange={handleGuestsChange}
              />
              <button
                type="submit"
                className="mt-4 bg-primary w-full mb-4 text-white text-center py-2 px-6 rounded-2xl"
              >
                Checkout
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Price;
