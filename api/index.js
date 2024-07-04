const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User.js");
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

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
  const userDoc = await User.findOne({ email: email });
  if (userDoc) res.json("Found");
  else res.json("Not Found");
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
