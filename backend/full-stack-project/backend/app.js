require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();



mongoose
  .connect(process.env.DATABSE_URL)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed");
    console.error(error.message);
  });
