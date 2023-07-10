const mongoose = require("mongoose");

const handsetSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  macAddress: {
    type: String,
    required: true,
  },
});

const Handset = mongoose.model("Handset", handsetSchema);

module.exports = Handset;
