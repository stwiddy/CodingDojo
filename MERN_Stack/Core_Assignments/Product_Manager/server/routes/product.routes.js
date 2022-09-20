const ProductController = require("./../controllers/product.controller")

module.exports = (app) =>{
    app.get("/api/test", ProductController.testApi)
    app.get("/api/products", ProductController.allProd)
    app.get("/api/products/:id", ProductController.oneProd)
    app.post("/api/products", ProductController.addProd)
    app.put("/api/products/:id", ProductController.updateProd)
    app.delete("/api/products/:id", ProductController.deleteProd)
}