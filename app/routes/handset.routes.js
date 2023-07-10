const express = require("express");
const router = express.Router();
const handsetController = require("../controller/handset.controller.js");

// Create a new handset
router.post("/", handsetController.createHandset);

// Get all handsets
router.get("/", handsetController.getAllHandsets);

// Get a single handset by ID
router.get("/:id", handsetController.getHandsetById);

// Update a handset
router.put("/:id", handsetController.updateHandset);

// Delete a handset
router.delete("/:id", handsetController.deleteHandset);

module.exports = router;
