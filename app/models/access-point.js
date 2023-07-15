const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    type: {
        type: String
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
        type: Number
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
});

const AccessPoint = mongoose.models.AccessPoint || mongoose.model('AccessPoint', schema)

module.exports = AccessPoint;
