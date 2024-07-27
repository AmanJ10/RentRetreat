const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  place: String,
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: String,
  checkOut: String,
  noOfGuests: Number,
  bedrooms: String,
  beds: String,
  bathrooms: String,
  tagLine: String,
  name: String,
  phone: String,
  price: Number,
  sessionId: String,
  createdAt: { type: Date, default: Date.now() },
});

const BookingModel = mongoose.model("Booking", bookingSchema);
module.exports = BookingModel;
