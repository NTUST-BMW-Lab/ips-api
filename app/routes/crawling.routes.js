const express = require("express");
const router = express.Router();
const crawlingController = require("../controller/crawling.controller.js");
const verifyToken = require("../middleware/authMiddleware.js");

// Create a new crawling data
router.post("/", verifyToken, crawlingController.createCrawling);

// Get all crawling data
router.get("/", verifyToken, crawlingController.getAllCrawlingData);

// Get a single crawling data by ID
router.get("/:id", verifyToken, crawlingController.getCrawlingDataById);

// Update a crawling data
router.put("/:id", verifyToken, crawlingController.updateCrawlingData);

// Delete a crawling data
router.delete("/:id", verifyToken, crawlingController.deleteCrawlingData);

module.exports = router;
