const express = require("express");

const wap = require("../controller/wap.controller.js");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/create", wap.create);

router.get("/", verifyToken, wap.findAll);

router.get("/essid/:essid", verifyToken, wap.findByEssid);

router.put("/:id", verifyToken, wap.update);

router.delete("/essid/:essid", verifyToken, wap.deleteByEssid);

module.exports = router;
