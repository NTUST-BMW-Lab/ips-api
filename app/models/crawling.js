const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    handset: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Handset",
        required: true,
    },
    location: {
        building: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Building",
            required: true,
        },
        floor: {
            type: Number,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    access_points: []
});

const Crawling = mongoose.models.Crawling || mongoose.model("Crawling", schema);

module.exports = Crawling;
