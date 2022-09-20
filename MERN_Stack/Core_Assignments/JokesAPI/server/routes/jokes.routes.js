const JokeController = require("./../controllers/jokes.controller")

module.exports = (app) =>{
    app.get("/api/test", JokeController.testApi)
    app.get("/api/jokes", JokeController.getAll)
    app.get("/api/jokes/:id", JokeController.getOne)
    app.post("/api/jokes", JokeController.addJoke)
    app.put("/api/jokes/:id", JokeController.updateJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
}