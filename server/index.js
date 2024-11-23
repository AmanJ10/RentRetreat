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
  console.log(`Attempting login for email: ${email}`);
  const userDoc = await User.findOne({ email });

  if (!userDoc) {
    console.log(`User not found for email: ${email}`);
    return res.status(404).json("User not found");
  }

  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (!passOk) {
    console.log(`Password mismatch for email: ${email}`);
    return res.status(422).json("Password not correct");
  }

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
      if (err) {
        console.error("JWT sign error:", err);
        return res.status(500).json("Internal server error");
      }
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .json(userDoc);
    }
  );
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

app.get("/allplaces", async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (e) {
    res
      .status(500)
      .json({
        error: "An error occurred while fetching places.",
        details: e.message,
      });
  }
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
      title,
      description,
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
      cancel_url: `https://rent-retreat.netlify.app/cancel?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        userId: userData.id,
        placeId: product.id,
        title,
        address,
        images: JSON.stringify(images),
        placesPerks: JSON.stringify(placesPerks),
        extraInfo,
        checkIn,
        checkOut,
        noOfGuests,
        description,
        bedrooms,
        beds,
        bathrooms,
        tagLine,
        phone,
        price,
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json("Internal Server Error");
  }
});

app.post("/api/verify-checkout-session", async (req, res) => {
  const { sessionId } = req.body;

  if (!sessionId) {
    return res.status(400).json({ error: "Session ID is required" });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const metadata = session.metadata;

      await Booking.create({
        user: metadata.userId,
        place: metadata.placeId,
        title: metadata.title,
        address: metadata.address,
        photos: JSON.parse(metadata.images),
        perks: JSON.parse(metadata.placesPerks),
        extraInfo: metadata.extraInfo,
        checkIn: metadata.checkIn,
        checkOut: metadata.checkOut,
        noOfGuests: metadata.noOfGuests,
        bedrooms: metadata.bedrooms,
        beds: metadata.beds,
        bathrooms: metadata.bathrooms,
        tagLine: metadata.tagLine,
        phone: metadata.phone,
        price: metadata.price,
        sessionId,
      });

      return res.status(200).json({ message: "Booking added successfully" });
    } else {
      return res.status(400).json({ error: "Payment was not successful" });
    }
  } catch (error) {
    console.error("Error verifying checkout session:", error);
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
