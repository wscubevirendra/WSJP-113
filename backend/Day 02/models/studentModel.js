const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: null,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        default: "web"
    },
    status: {
        type: Boolean,
        default: true
    }
})

const studentModel = mongoose.model("Students", studentSchema);

module.exports = studentModel;