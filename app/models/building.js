const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    floors: {
        type: Number,
    },
    location: {
        type: String
    }
});

const Building = mongoose.model('Building', schema);

module.exports = Building;