require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
console.log(process.env.MONGODB_URI);
const app = express();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(cors()); // cor dùng để ngăn chặn cross origin
app.use(cookieParser()); // dùng để tạo cookie và gán cookie
app.use(express.json());

app.listen(5500, () => {
  console.log("listening on port");
});
