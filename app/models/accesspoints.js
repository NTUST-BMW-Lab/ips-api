const mongoose = require('mongoose')

const access_points = new mongoose.Schema({
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
    building: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Building',
        required: true,
    }
});

const access_point = mongoose.model('Access_Point', access_points)

module.exports = access_point;