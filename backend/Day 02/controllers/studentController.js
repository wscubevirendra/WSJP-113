const studentModel = require("../models/studentModel")

async function createStudent(req, res) {
    try {
        const exist = await studentModel.findOne({ email: req.body.email });
        console.log(exist)
        if (exist) {
            return res.send({
                message: "Try with diffrent email",
                flag: 0
            })
        }

        await studentModel.create({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            course: req.body.course
        })

        res.send({
            message: "Student Data Create",
            flag: 1
        })

    } catch (error) {
        console.log(error)
        res.send({
            message: "Internal Server Error",
            flag: 0
        })
    }
}


async function getStudents(req, res) {
    try {
        const students = await studentModel.find();
        res.send({
            message: "Data find",
            flag: 1,
            students
        })

    } catch (error) {
        res.send({
            message: "Internal Server Error",
            flag: 0
        })
    }
}


async function deleteStudent(req, res) {
    try {
        const id = req.params.id
        const studentExist = await studentModel.findById(id);
        if (!studentExist) {
            res.send({
                message: "Student data not found",
                flag: 0
            })
        }

        await studentModel.deleteOne({ _id: id })
        res.send({
            message: "Data delete succesfully",
            flag: 1
        })

    } catch (error) {
        res.send({
            message: "Internal Server Error",
            flag: 0
        })
    }
}


async function statusUpdate(req, res) {
    try {
        const id = req.params.id
        const studentExist = await studentModel.findById(id);
        if (!studentExist) {
            res.send({
                message: "Student data not found",
                flag: 0
            })
        }

        await studentModel.updateOne(
            { _id: id },
            {
                $set: {
                    status: !studentExist.status
                }
            }
        )

        res.send({
            message: "Data Update succesfully",
            flag: 1
        })



    } catch (error) {
        res.send({
            message: "Internal Server Error",
            flag: 0
        })
    }
}


module.exports = { createStudent, getStudents, deleteStudent, statusUpdate }

