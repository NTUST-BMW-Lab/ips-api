const mongoose = require('mongoose');

const wapSchema = new mongoose.Schema({
  essid: {
    type: String,
    required: true
  },
  bssid: {
    type: String,
    required: true
  },
  rssi: {
    type: Number,
    required: true
  }
});

const Wap = mongoose.model('Wap', wapSchema);

module.exports = Wap;
