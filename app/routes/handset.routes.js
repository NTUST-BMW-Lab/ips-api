const express = require("express");
const router = express.Router();
const handsetController = require("../controller/handset.controller.js");
const verifyToken = require("../middleware/authMiddleware.js");

// Create a new handset
router.post("/", verifyToken, handsetController.createHandset);

// Get all handsets
router.get("/", verifyToken, handsetController.getAllHandsets);

// Get a single handset by ID
router.get("/:id", verifyToken, handsetController.getHandsetById);

// Update a handset
router.put("/:id", verifyToken, handsetController.updateHandset);

// Delete a handset
router.delete("/:id", verifyToken, handsetController.deleteHandset);

module.exports = router;
