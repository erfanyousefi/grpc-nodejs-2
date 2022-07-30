require("./config/db.connection");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path")
const protoPath = path.join(__dirname, "..", "..", "protos", "blog.proto");
const blogProto = protoLoader.loadSync(protoPath);
const {blogPackage}  = grpc.loadPackageDefinition(blogProto);
const blogServiceURL = "localhost:4002";
// const {deleteProduct, updateProduct, createProduct, getProduct, listProduct} = require("./functions/product.grpc")
function main(){
    const server = new grpc.Server();
    server.addService(blogPackage.BlogService.service, {})
    server.bindAsync(blogServiceURL, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if(err) return console.log(err.message)
        console.log("gRPC BlogService Runing over port " + port);
        server.start()
    })
}
main()