const { create, get } = require("../controllers/color.controller.js");
const colorRouter = require("express").Router();

colorRouter.post("/create", create);
colorRouter.get("/", get);
// colorRouter.patch("/status/:id", update);
// colorRouter.delete("/delete/:id", deleteById);
// colorRouter.get("/:id", getById);
// colorRouter.put("/update/:id", updateById);


module.exports = colorRouter;