module.exports = (app) => {
  const user = require("../controller/user.controller.js");
  

  var router = require("express").Router();

  router.post("/register", user.create);

  router.post("/login", user.login);

  app.use("/api/user", router);
};
