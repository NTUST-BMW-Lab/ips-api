const express = require("express");
const router = express.Router();
const Controller = require("../controllers/handset.controller.js");
const verifyToken = require("../middleware/authMiddleware.js");

router.post("/", verifyToken, Controller.store);
router.get("/", verifyToken, Controller.index);
router.get("/:id", verifyToken, Controller.show);
router.put("/:id", verifyToken, Controller.update);
router.delete("/:id", verifyToken, Controller.destroy);

module.exports = router;
