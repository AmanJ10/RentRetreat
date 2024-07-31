const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  address: String,
  photos: [String],
  // rating: String,
  description: String,
  perks: [String],
  extraInfo: String,
  checkIn: String,
  maxGuests: String,
  bedrooms: String,
  beds: String,
  bathrooms: String,
  pricePerNight: Number,
  tagLine: String,
});

const PlaceModel = mongoose.model("Place", placeSchema);
module.exports = PlaceModel;
