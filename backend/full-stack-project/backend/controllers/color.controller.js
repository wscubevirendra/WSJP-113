const ColorModel = require("../models/color.model")
const { sendAllFieldsRequired, sendAlreadyExist, sendCreated, sendServerError, sendSuccess, sendUpdated, sendNotFound, sendDeleted } = require("../utils/responseHelpers")

const create = async (req, res) => {
    try {
        const { name, slug, code } = req.body;
        if (!name || !slug || !code) sendAllFieldsRequired(res);
        const isColorExist = await ColorModel.findOne({ name });
        if (isColorExist) sendAlreadyExist(res);
        const color = await ColorModel.create({ name, slug, code });
        return sendCreated(res);
    } catch (error) {
        return sendServerError(res);
    }
}


const get = async (req, res) => {
    try {
        
        const colors = await ColorModel.find();
        return sendSuccess(res, "color Find", colors);
    } catch (error) {
        return sendServerError(res);
    }
}
// const update = async (req, res) => {
//     try {
//         const { field } = req.body;
//         const { id } = req.params;

//         const fields = ["status", "is_home", "is_best", "is_top"];
//         if (!fields.includes(field)) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid field for update"
//             });
//         }

//         const category = await CategoryModel.findById(id);
//         if (!category) {
//             return sendNotFound(res);
//         }

//         await CategoryModel.findByIdAndUpdate(id, {
//             [field]: !category[field]
//         });
//         const message = `${field} Status Updated successfully`
//         return sendUpdated(res, message);

//     } catch (error) {
//         console.error(error);
//         return sendServerError(res);
//     }
// };

// const deleteById = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const color = await ColorModel.findById(id);
//         if (!color) {
//             return sendNotFound(res);
//         }
//         await ColorModel.findByIdAndDelete(id);
//         return sendDeleted(res)
//     } catch (error) {
//         return sendServerError(res);
//     }
// }







module.exports = {
    create,
    get
}