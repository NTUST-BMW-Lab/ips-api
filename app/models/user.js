const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.models.User || mongoose.model("User", schema);

module.exports = User;
