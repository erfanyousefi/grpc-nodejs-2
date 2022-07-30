const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path")
const productProtoPath = path.join(__dirname, "..", "..", "protos", "product.proto");
const productProto = protoLoader.loadSync(productProtoPath);
const {productPackage}  = grpc.loadPackageDefinition(productProto);
const productServiceURL = "localhost:4001";
const productClient = new productPackage.ProductService(productServiceURL, grpc.credentials.createInsecure());

function listProduct(req, res, next) {
    productClient.listProduct(null, (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
}
function getProduct(req, res, next) {
    const {id} = req.params;
    productClient.getProduct({id}, (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
}
function createProduct(req, res, next) {
    const {title, price} = req.query;
    productClient.createProduct({title, price}, (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
}
function updateProduct(req, res, next) {
    const data = req.query;
    productClient.updateProduct(data, (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
}
function deleteProduct(req, res, next) {
    const {id} = req.params;
    productClient.deleteProduct({id}, (err, data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
}
module.exports = {
    deleteProduct,
    updateProduct,
    createProduct,
    getProduct,
    listProduct
}