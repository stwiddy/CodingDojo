const LocationController = require("./../controllers/location.controller")

module.exports = (app) =>{
    app.get("/api/test", LocationController.testApi)
    app.get("/api/locations", LocationController.getAll)
    app.get("/api/locations/:id", LocationController.getOne)
    app.post("/api/locations", LocationController.addLoc)
    app.put("/api/locations/:id", LocationController.updateLoc)
    app.delete("/api/locations/:id", LocationController.deleteLoc)
}