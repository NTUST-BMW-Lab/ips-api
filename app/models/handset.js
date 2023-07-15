const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    os: {
        type: String,
        required: true,
    },
});

const Handset = mongoose.models.Handset || mongoose.model("Handset", schema);

module.exports = Handset;
