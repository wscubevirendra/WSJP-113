const express = require("express");
const studentRouter = express.Router();
const { createStudent, getStudents, deleteStudent, statusUpdate } = require("../controllers/studentController")


studentRouter.post("/create", createStudent);
studentRouter.get("/", getStudents);
studentRouter.delete("/delete/:id", deleteStudent);
studentRouter.patch("/update/:id", statusUpdate)


module.exports = studentRouter;