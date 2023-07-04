require('dotenv')
const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions))

app.use(express.json())

const db = require('./app/models');
db.mongoose.connect(
    db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Successfully connected to database!');
    }).catch(err => {
        console.log('Failed to connect to database!', err);
        process.exit();
    });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port 8080')
});
