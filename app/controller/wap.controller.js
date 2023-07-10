const Wap = require("../models/wap");

const create = async (req, res) => {
  if (!req.body.essid) {
    res.status(400).send({ message: "Essid cannot be empty!" });
    return;
  }

  console.log(req.body);

  const wap = new Wap({
    essid: req.body.essid,
    bssid: req.body.bssid,
    rssi: req.body.rssi,
  });

  await wap
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some Error Occurred while creating the Schema",
      });
    });
};

// Retrieve all Tutorials from the database.
const findAll = async (req, res) => {
  try {
    const waps = await Wap.find();
    res.json(waps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Find a single Tutorial with an id
const findOne = (req, res) => {
  const id = req.params.id;
};

const findByEssid = async (req, res) => {
  try {
    const essid = req.params.id;
    const waps = await Wap.find({ essid });
    if (!waps) {
      return res
        .status(404)
        .send({ message: "There's no WAP with that certain ESSID" });
    }
    res.json(waps);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occured while attempting to fetch by ESSID",
    });
  }
};

const update = async (req, res) => {
  try {
    const { essid, bssid, rssi } = req.body;
    const wap = await Wap.findByIdAndUpdate(
      req.params.id,
      { essid, bssid, rssi },
      { new: true }
    );
    if (!wap) {
      return res
        .status(404)
        .json({ error: "WAP with that certain ID doesn't exist" });
    }
    res.json(wap);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a Tutorial with the specified id in the request
const deleteByEssid = async (req, res) => {
  try {
    const essid = req.params.essid;
    const wap = await Wap.deleteMany({ essid });
    res.json({ message: "WAP Entries have been deleted!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAll = async (req, res) => {
  try {
    await Wap.deleteMany({});
    res.status(200).json({ message: "All WAP documents have been deleted." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting WAP documents." });
  }
};

module.exports = {
  create,
  findAll,
  findOne,
  findByEssid,
  update,
  deleteByEssid,
  deleteAll,
};
