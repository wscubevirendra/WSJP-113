const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const studentRouter = require("./routers/studentRouter");
const server = express();
server.use(express.json());
server.use(cors({ origin: "http://localhost:3000" }))
server.use("/student",studentRouter);

mongoose.connect("mongodb://localhost:27017/wsjp113").then(
    () => {
        console.log("DataBase Connect")
        server.listen(
            "5000",
            () => {
                console.log("Server Start PORT number 5000")
            }
        )
    }
).catch(
    () => {
        console.log("DataBase not connect")
    }
)





