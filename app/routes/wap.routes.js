module.exports = (app) => {
  const wap = require("../controller/wap.controller.js");

  var router = require("express").Router();
  const { verifyToken } = require("../middleware");

  router.post("/", verifyToken, wap.create);

  router.get("/", verifyToken, wap.findAll);

  router.get("/essid/:essid", verifyToken, wap.findByEssid);

  router.put("/:id", verifyToken, wap.update);

  router.delete("/essid/:essid", verifyToken, wap.deleteByEssid);

  app.use("/api/wap", router);
};
