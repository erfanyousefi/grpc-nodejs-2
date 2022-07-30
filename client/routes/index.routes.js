const router = require("express").Router();
const {ProductRouter} = require("./product.routes")
router.use('/product', ProductRouter)
module.exports = {
    AllRoutes: router
}