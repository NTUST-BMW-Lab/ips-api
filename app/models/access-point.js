const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    bssid: {
        type: String,
        required: true,
    },
    ssid: {
        type: String,
        required: true,
    },
    floor: {
        type: Number,
        required: true,
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
});

const AccessPoint = mongoose.model('AccessPoint', schema)

module.exports = AccessPoint;
