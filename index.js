require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = {
    user: require("./app/routes/user.route"),
    handset: require("./app/routes/handset.route"),
    crawling: require("./app/routes/crawling.route"),
    building: require("./app/routes/building.route"),
    access_point: require("./app/routes/access-point.route")
}

const app = express();

const corsOptions = {
    origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// add route
app.use("/api/users", routes.user);
app.use("/api/access-points", routes.access_point)
app.use("/api/handsets", routes.handset);
app.use("/api/crawling", routes.crawling);
app.use('/api/buildings', routes.building)

mongoose.Promise = global.Promise;
mongoose
    .connect(process.env.URL, {
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
