require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// Обработка ошибок, последний middleware
app.use(errorHandler);


const start = async () => {
    try {
        app.listen(PORT, () => { console.log(`Server start ${PORT}`); });
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (e) {
        console.log(e);
    }
}

start();
