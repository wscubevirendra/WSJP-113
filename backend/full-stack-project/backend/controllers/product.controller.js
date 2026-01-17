const ProductModel = require("../models/product.model");
const { uniqueName } = require("../utils/helper");
const fs = require("fs");
const { sendAllFieldsRequired, sendAlreadyExist, sendCreated, sendServerError, sendSuccess, sendUpdated, sendNotFound, sendDeleted } = require("../utils/responseHelpers");

const create = async (req, res) => {
    try {
        const { name, slug, description, original_price, discount_percentage, final_price, category_id, color_ids, brand_id } = req.body;
        const thumbnail = req.files.thumbnail;
        if (!name || !slug || !thumbnail || !description || !original_price || !discount_percentage || !final_price || !category_id || !color_ids || !brand_id) sendAllFieldsRequired(res);
        const isProductExist = await ProductModel.findOne({ name });
        if (isProductExist) sendAlreadyExist(res);
        const image = uniqueName(thumbnail.name);
        const destination = "./public/images/product/main/" + image;
        thumbnail.mv(
            destination,
            async (error) => {
                if (error) return sendServerError(res, "Unable to upload file");
                const prodict = await ProductModel.create({ ...req.body, color_ids: JSON.parse(color_ids), thumbnail: image });
                return sendCreated(res);
            });
    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}


const get = async (req, res) => {
    try {
        const product = await ProductModel.find().populate([
            {
                path: "category_id",
                select: "name slug"
            },
            {
                path: "color_ids",
                select: "name code"
            },
            {
                path: "brand_id",
                select: "name slug"
            },

        ]);

        return sendSuccess(res, "Product Find", { product, imageBaseUrl: "http://localhost:5000/images/product/" });
    } catch (error) {
        return sendServerError(res);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await ProductModel.findById(id);
        if (!product) return sendNotFound(res);
        return sendSuccess(res, "Product Find", { product, imageBaseUrl: "http://localhost:5000/images/product/" },);
    } catch (error) {
        return sendServerError(res);
    }
}


const otherImageAdd = async (req, res) => {
    try {
        const id = req.params.id;
        const imageFile = req.files.images;
        const product = await ProductModel.findById(id);
        if (!product) return sendNotFound(res);
        const other_images_names = product.other_images;

        if (Array.isArray(imageFile) == true) {
            const all_promise = imageFile.map(async (file) => {
                const image = uniqueName(file.name);
                const destination = "./public/images/product/other/" + image;
                other_images_names.push(image);
                return await file.mv(destination)
            })

            await Promise.all(all_promise);

        } else {
            const image = uniqueName(imageFile.name);
            const destination = "./public/images/product/other/" + image;
            other_images_names.push(image);
            await imageFile.mv(destination)
        }

        product.other_images = other_images_names;
        await product.save()
        return sendCreated(res, "Add Multiple images")


    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}






module.exports = {
    create,
    get,
    getById,
    otherImageAdd
}