const mongoose = require('mongoose');
 
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required : [true, "title is required"],
        minlength : [1, "Title must be at least 1 characters long"]
    },
    price : {
        type: Number,
        required : [true, "Price is required"],
        min: [1, "Price must be between 1-1000"],
        max: [1000, "Price must be between 1-1000"]
    },
    description: {
        type: String,
        required : [true, "Description is required"],
        min: [1, "Description must be atleast 20 characters"]   
    },
}, {timestamps: true});
 
const Product = mongoose.model('Product', ProductSchema);
 

module.exports = Product;

