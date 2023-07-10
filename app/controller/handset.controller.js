const Handset = require("../models/handset");

// Create a new handset
async function createHandset(req, res) {
  try {
    const handset = await Handset.create(req.body);
    res.status(201).json(handset);
  } catch (error) {
    res.status(500).json({ error: "Failed to create handset" });
  }
}

// Get all handsets
async function getAllHandsets(req, res) {
  try {
    const handsets = await Handset.find();
    res.json(handsets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch handsets" });
  }
}

// Get a single handset by ID
async function getHandsetById(req, res) {
  try {
    const handset = await Handset.findById(req.params.id);
    if (!handset) {
      return res.status(404).json({ error: "Handset not found" });
    }
    res.json(handset);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch handset" });
  }
}

// Update a handset
async function updateHandset(req, res) {
  try {
    const handset = await Handset.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!handset) {
      return res.status(404).json({ error: "Handset not found" });
    }
    res.json(handset);
  } catch (error) {
    res.status(500).json({ error: "Failed to update handset" });
  }
}

// Delete a handset
async function deleteHandset(req, res) {
  try {
    const handset = await Handset.findByIdAndRemove(req.params.id);
    if (!handset) {
      return res.status(404).json({ error: "Handset not found" });
    }
    res.json({ message: "Handset deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete handset" });
  }
}

module.exports = {
  createHandset,
  getAllHandsets,
  getHandsetById,
  updateHandset,
  deleteHandset,
};
