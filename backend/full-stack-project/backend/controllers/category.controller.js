const ProductModel = require("../models/product.model");
const CategoryModel = require("../models/category.model");
const { uniqueName } = require("../utils/helper");
const fs = require("fs");
const { sendAllFieldsRequired, sendAlreadyExist, sendCreated, sendServerError, sendSuccess, sendUpdated, sendNotFound, sendDeleted } = require("../utils/responseHelpers");
const productModel = require("../models/product.model");

const create = async (req, res) => {
    try {
        const { name, slug } = req.body;
        const categoryImage = req.files.image;
        if (!name || !slug || !categoryImage) sendAllFieldsRequired(res);
        const iscategoryExist = await CategoryModel.findOne({ name });
        if (iscategoryExist) sendAlreadyExist(res);
        const image = uniqueName(categoryImage.name);
        const destination = "./public/images/category/" + image;
        categoryImage.mv(
            destination,
            async (error) => {
                if (error) return sendServerError(res, "Unable to upload file");
                const category = await CategoryModel.create({ name, slug, image });
                return sendCreated(res);
            });
    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}


const get = async (req, res) => {
    try {
        const query = req.query;
        const dynamicFilter = {};
        const limit = query.limit != null ? query.limit : 0
        if (query.id) dynamicFilter._id = query.id;
        if (query.status) dynamicFilter.status = query.status == "true" ? true : false;
        if (query.home) dynamicFilter.is_home = query.home == "true" ? true : false;
        if (query.is_best) dynamicFilter.is_best = query.is_best == "true" ? true : false;
        if (query.is_top) dynamicFilter.is_top = query.is_top == "true" ? true : false;

        const category = await CategoryModel.find(dynamicFilter).limit(limit);
        const data = await Promise.all(
            category.map(
                async (cat) => {
                    const productCount = await ProductModel.countDocuments({ category_id: cat._id })
                    return {
                        ...cat._doc,
                        count: productCount
                    }
                })
        )


        return sendSuccess(res, "Category Find", { category: data, imageBaseUrl: "http://localhost:5000/images/category/" });
    } catch (error) {
        return sendServerError(res);
    }
}
const update = async (req, res) => {
    try {
        const { field } = req.body;
        const { id } = req.params;

        const fields = ["status", "is_home", "is_best", "is_top"];
        if (!fields.includes(field)) {
            return res.status(400).json({
                success: false,
                message: "Invalid field for update"
            });
        }

        const category = await CategoryModel.findById(id);
        if (!category) {
            return sendNotFound(res);
        }

        await CategoryModel.findByIdAndUpdate(id, {
            [field]: !category[field]
        });
        const message = `${field} Status Updated successfully`
        return sendUpdated(res, message);

    } catch (error) {
        console.error(error);
        return sendServerError(res);
    }
};

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await CategoryModel.findById(id);
        if (!category) {
            return sendNotFound(res);
        }
        await categoryModel.findByIdAndDelete(id);
        fs.unlinkSync(`./public/images/category/${category.image}`);
        return sendDeleted(res)
    } catch (error) {
        return sendServerError(res);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await CategoryModel.findById(id);
        if (!category) return sendNotFound(res);
        return sendSuccess(res, "Category Find", category);
    } catch (error) {
        return sendServerError(res);
    }
}


const updateById = async (req, res) => {
    try {
        const { name, slug } = req.body;
        const id = req.params.id;
        const category_image = req.files != null ? req.files.image : null;
        const category = await CategoryModel.findById(id);
        if (!category) return sendNotFound(res);

        const update = {};
        if (name) update.name = name;
        if (slug) update.slug = slug;
        console.log(update)

        if (category_image != null) {
            const image = uniqueName(category_image.name);
            const destination = "./public/images/category/" + image;
            category_image.mv(
                destination,
                async (error) => {
                    if (error) return sendServerError(res, "Unable to upload file");
                    update.image = image;

                    await categoryModel.updateOne(
                        { _id: id },
                        {
                            $set: update
                        }
                    )

                    fs.unlinkSync(`./public/images/category/${category.image}`);
                    return sendUpdated(res, "Category Update Successfully")
                });

        } else {
            await categoryModel.updateOne(
                { _id: id },
                {
                    $set: update
                }
            )

            return sendUpdated(res, "Category Update Successfully")
        }




    } catch (error) {
        console.log(error)
        return sendServerError(res);
    }
}





module.exports = {
    create,
    get,
    update,
    deleteById,
    getById,
    updateById
}