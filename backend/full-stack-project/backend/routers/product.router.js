const { create, get,getById,otherImageAdd } = require("../controllers/product.controller.js");
const productRouter = require("express").Router();
const fileUpload = require("express-fileupload");

productRouter.post("/create", fileUpload({ createParentPath: true }), create);
productRouter.get("/", get);
// productRouter.patch("/status/:id", update);
// productRouter.delete("/delete/:id", deleteById);
productRouter.get("/:id", getById);
productRouter.post("/otherImageAdd/:id", fileUpload({ createParentPath: true }), otherImageAdd);
// productRouter.put("/update/:id", fileUpload({ createParentPath: true }), updateById);


module.exports = productRouter;