const UserModel = require("../models/user.model");
const Cryptr = require('cryptr');
const { sendServerError, sendAllFieldsRequired, sendCreated, sendNotFound, sendSuccess } = require("../utils/responseHelpers");
const cryptr = new Cryptr(process.env.SECRET_KEY);


const register = async (req, res) => {
    try {
        const { password, name, email } = req.body;
        if (!name || !password || !email) return sendAllFieldsRequired(res);
        const encryptedPass = cryptr.encrypt(password);
        await UserModel.create({ name, email, password: encryptedPass });
        return sendCreated(res, "User Accound Create")

    } catch (error) {
        return sendServerError(res);
    }
}


const login = async (req, res) => {
    try {
        const { password, email } = req.body;
        console.log(req.body)
        if (!password || !email) return sendAllFieldsRequired(res);
        const user = await UserModel.findOne({ email });
        if (!user) return sendNotFound(res, "User not found")
        if (password !== cryptr.decrypt(user.password)) {
            return sendNotFound(res, "Incorrect Password")
        }

        return sendSuccess(res, "User Login")

    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}


module.exports = {
    register,
    login
}
