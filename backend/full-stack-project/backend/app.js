require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();


mongoose.connect(process.env.DATABSE_URL).then(
    () => {
        console.log("DataBase is Connect")

        app.listen(
            process.env.PORT,
            () => {
                console.log("Server is Started")
            }
        )
    }
).catch(
    () => {
        console.log("DataBase is not connect")
    }
)