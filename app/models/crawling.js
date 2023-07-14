const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    access_point: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AccessPoint",
        required: true,
    },
    handset: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Handset",
        required: true,
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    data: [{
        rssi: {
            type: Number,
            required: true,
        },
        time_string: {
            type: String,
            required: true
        }
    }]
});

const Crawling= mongoose.model("Crawling", schema);

module.exports = Crawling;
