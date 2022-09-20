
const Product = require("./../models/product.model")



module.exports.testApi = (req, res) => {
    res.json({ Status: "ok", message: "Message from Backend"})
}


// get all
module.exports.allProd = (req, res) => {
    Product.find()
        .then(allProd => res.json(allProd))
        .catch(err => res.json(err))
}

// get one
module.exports.oneProd = (req, res) => {
    const paramsId = req.params.id
    Product.findOne({ _id: paramsId })
        .then(prod => res.json(prod))
        .catch(err => res.json(err))
}

// create
module.exports.addProd = (req, res) => {

    const newProd = req.body
    Product.create(newProd)
        .then(prod => res.json(prod))
        .catch(err => res.json(err))
}



// update -- getOne + create
module.exports.updateProd = (req, res) => {
    const paramsId = req.params.id
    const updatedProd = req.body
    Product.findOneAndUpdate(
        { _id: paramsId }, 
        updatedProd, 
        { new: true, runValidators: true }
    )
        .then(updatedProd => res.json(updatedProd))
        .catch(err => res.json(err))


}

// delete
module.exports.deleteProd = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id })
        .then(deletedProd => res.json(deletedProd))
        .catch(err => res.json(err))
}