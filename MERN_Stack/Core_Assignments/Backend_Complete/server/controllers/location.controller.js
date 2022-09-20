const Location = require("./../models/location.model")

module.exports.testApi = (req, res) => {
    res.json({ Status: "ok"})
}


// Get all
module.exports.getAll = (req, res) => {
    Location.find()
        .then(getAll => res.json(getAll))
        .catch(err=> res.json(err))

}

// Get One
module.exports.getOne = (req, res) => {
    const paramsId = req.params.id
    Location.findOne({_id : paramsId})
    .then(loc => res.json(loc))
    .catch(err => res.json(err))
}

// Create
module.exports.addLoc = (req, res) => {
    const newLoc = req.body
    Location.create((newLoc))
        .then(loc => res.json(loc))
        .catch(err => res.json(err))
}

// Update -- getOne + create
module.exports.updateLoc = (req, res) => {
    const paramsId = req.params.id
    const updatedLoc = req.body
    Location.findOneAndUpdate(
        {_id: paramsId}, // criteria 
        updatedLoc, // update info
        {new: true, runValidators: true} //new : true --> return the updated object
        //runValidation run validations or not 
    )
        .then(updatedLoc => res.json(updatedLoc))
        .catch(err => res.json(err))
}

// Delete 
module.exports.deleteLoc = (req, res) => {
    Location.findOneAndDelete({_id: req.params.id})
        .then(status => res.json(status))
        .catch(err => res.json(err))
}