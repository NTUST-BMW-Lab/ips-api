const mongoose = require("mongoose");

const crawlingSchema = new mongoose.Schema({
  accessPoint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Access_Point",
    required: true,
  },
  handset: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Handset",
    required: true,
  },
  rssi: {
    type: Number,
    required: true,
  },
  coordinate: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
});

const Crawling = mongoose.model("Crawling", crawlingSchema);

module.exports = Crawling;
