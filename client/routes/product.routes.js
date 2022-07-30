const { listProduct, createProduct, updateProduct, getProduct, deleteProduct } = require("./../controllers/product.controller");

const router = require("express").Router();
router.get("/list", listProduct);
router.get("/create", createProduct);
router.get("/update", updateProduct);
router.get("/delete/:id", deleteProduct);
router.get("/:id", getProduct);
module.exports = {
    ProductRouter: router
}