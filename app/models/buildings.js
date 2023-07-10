const mongoose = require('mongoose')

const buildings  = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    floor: {
        type: Number,
        required: true,
    },
    coordinate: {
        long: {
            type: Number,
            required: true,
        },
        lat: {
            type: Number,
            required: true,
        }
    }
});

const building = mongoose.model('Building', buildings);

module.exports = building;