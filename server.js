require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const waprouters = require("./app/routes/wap.routes");
const userrouters = require("./app/routes/user.routes");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// add route
app.use("/api/user", userrouters);
app.use("/api/waps", waprouters);

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to database!");
  })
  .catch((err) => {
    console.log("Failed to connect to database!", err);
    process.exit();
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server is running on port 8080");
});
