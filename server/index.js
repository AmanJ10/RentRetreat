/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");
const Place = require("./models/Place.js");
const Booking = require("./models/Booking.js");
const app = express();
const cookieParser = require("cookie-parser");
const stripe = require("stripe")(process.env.STRIPE_API_SRECRET_KEY);

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://rent-retreat.netlify.app", "http://localhost:5173"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

mongoose.connect(process.env.MONGO_URL);

function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(user);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        jwtSecret,
        {
          expiresIn: "10h",
        },
        (err, token) => {
          if (err) throw err;
          res
            .cookie("token", token, {
              httpOnly: true,
              secure: true,
              sameSite: "none",
            })
            .json(userDoc);
        }
      );
    } else {
      res.status(422).json("pass not ok");
    }
  } else {
    res.json("not found");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.post("/addPlace", async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json("Unauthorized");
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;

    const {
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
    } = req.body;

    try {
      const place = await Place.create({
        owner: userData.id,
        title,
        address,
        photos: addedPhotos,
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
      });
      res.json(place);
    } catch (e) {
      res.status(422).json(e);
    }
  });
});

app.get("/places", async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json("Unauthorized");
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    try {
      const places = await Place.find({ owner: userData.id });
      res.json(places);
    } catch (e) {
      res.status(500).json(e);
    }
  });
});

app.get("/places/:id", async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (place) {
      res.json(place);
    } else {
      res.status(404).json({ message: "Place not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.post("/api/create-checkout-session", async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json("Unauthorized");
  }

  try {
    const userData = await getUserDataFromReq(req);

    const {
      product,
      quantity,
      name,
      description,
      title,
      images,
      placesPerks,
      extraInfo,
      checkIn,
      checkOut,
      noOfGuests,
      bedrooms,
      beds,
      address,
      bathrooms,
      price,
      phone,
      tagLine,
    } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: product.title,
            },
            unit_amount: product.pricePerNight * 100,
          },
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: `https://rent-retreat.netlify.app/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://rent-retreat.netlify.app/cancel`,
    });

    await Booking.create({
      user: userData.id,
      place: product.id,
      title,
      address,
      photos: images,
      description,
      perks: placesPerks,
      extraInfo,
      checkIn,
      checkOut,
      noOfGuests,
      bedrooms,
      beds,
      bathrooms,
      tagLine,
      name,
      phone,
      price,
      sessionId: session.id,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json("Internal Server Error");
  }
});

app.get("/bookings", async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json("Unauthorized");
  }
  try {
    const userData = await getUserDataFromReq(req);
    const bookings = await Booking.find({ user: userData.id }).populate(
      "place"
    );
    res.json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", error);
    res.status(500).json("Internal Server Error");
  }
});

app.get("/bookings/:id", async (req, res) => {
  try {
    const place = await Booking.findById(req.params.id);
    if (place) {
      res.json(place);
    } else {
      res.status(404).json({ message: "Place not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
