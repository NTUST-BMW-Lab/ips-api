const express = require("express");
const router = express.Router();
const crawlingController = require("../controller/crawling.controller.js");

// Create a new crawling data
router.post("/", crawlingController.createCrawling);

// Get all crawling data
router.get("/", crawlingController.getAllCrawlingData);

// Get a single crawling data by ID
router.get("/:id", crawlingController.getCrawlingDataById);

// Update a crawling data
router.put("/:id", crawlingController.updateCrawlingData);

// Delete a crawling data
router.delete("/:id", crawlingController.deleteCrawlingData);

module.exports = router;
