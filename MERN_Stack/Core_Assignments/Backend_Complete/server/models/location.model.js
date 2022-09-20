const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    location: {
        type: String,
        required: [true, "Location is required"],
        minlength: [3, "Location must be at-least 3 characters long"]
    },
    rating: {
        type: Number, // covers also int & double dec or no dec
        required: [true, "Rating is required"],
        min: [1, "Rating must be between 1-10 stars"],
        max: [10, "Rating must be between 1-10 stars"]
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
    season: {
        type: String,
        required: [true, "Season is required"]
    }
}, { timestamps: true });

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;