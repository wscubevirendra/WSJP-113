require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }))
app.use(express.static("public"));

app.use("/category", require("./routers/category.router"));
app.use("/brand", require("./routers/brand.router"))
app.use("/color", require("./routers/color.router"))
app.use("/product", require("./routers/product.router"))
app.use("/user", require("./routers/user.router"))



mongoose
  .connect(process.env.DATABSE_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(process.env.PORT, () => {
      console.log(` Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(" MongoDB connection failed");
    console.error(error.message);
  });
