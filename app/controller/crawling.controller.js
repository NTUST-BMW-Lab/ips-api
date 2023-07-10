const Crawling = require("../models/crawling");

// Create a new crawling
async function createCrawling(req, res) {
  try {
    const crawling = await Crawling.create(req.body);
    res.status(201).json(crawling);
  } catch (error) {
    res.status(500).json({ error: "Failed to create crawling data" });
  }
}

// Get all crawling data
async function getAllCrawlingData(req, res) {
  try {
    const crawlingData = await Crawling.find();
    res.json(crawlingData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch crawling data" });
  }
}

// Get a single crawling data by ID
async function getCrawlingDataById(req, res) {
  try {
    const crawlingData = await Crawling.findById(req.params.id);
    if (!crawlingData) {
      return res.status(404).json({ error: "Crawling data not found" });
    }
    res.json(crawlingData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch crawling data" });
  }
}

// Update crawling data
async function updateCrawlingData(req, res) {
  try {
    const crawlingData = await Crawling.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!crawlingData) {
      return res.status(404).json({ error: "Crawling data not found" });
    }
    res.json(crawlingData);
  } catch (error) {
    res.status(500).json({ error: "Failed to update crawling data" });
  }
}

// Delete crawling data
async function deleteCrawlingData(req, res) {
  try {
    const crawlingData = await Crawling.findByIdAndRemove(req.params.id);
    if (!crawlingData) {
      return res.status(404).json({ error: "Crawling data not found" });
    }
    res.json({ message: "Crawling data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete crawling data" });
  }
}

module.exports = {
  createCrawling,
  getAllCrawlingData,
  getCrawlingDataById,
  updateCrawlingData,
  deleteCrawlingData,
};
