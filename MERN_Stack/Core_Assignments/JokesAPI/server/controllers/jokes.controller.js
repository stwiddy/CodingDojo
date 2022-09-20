const Joke = require("./../models/jokes.model")

module.exports.testApi = (req, res) => {
    res.json({ Status: "ok"})
}

// Get all
module.exports.getAll = (req, res) => {
    Joke.find()
        .then(getAll => res.json(getAll))
        .catch(err=> res.json(err))

}

// Get One
module.exports.getOne = (req, res) => {
    const paramsId = req.params.id
    Joke.findOne({_id : paramsId})
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

// Create
module.exports.addJoke = (req, res) => {
    const newJoke = req.body
    Joke.create((newJoke))
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

// Update -- getOne + create
module.exports.updateJoke = (req, res) => {
    const paramsId = req.params.id
    const updatedJoke = req.body
    Joke.findOneAndUpdate(
        {_id: paramsId}, 
        updatedJoke, 
        {new: true, runValidators: true} 
    )
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json(err))
}

// Delete 
module.exports.deleteJoke = (req, res) => {
    Joke.findOneAndDelete({_id: req.params.id})
        .then(status => res.json(status))
        .catch(err => res.json(err))
}