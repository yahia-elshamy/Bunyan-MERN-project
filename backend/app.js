require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

// const cors = require("cors");
// app.use(cors());

const dbConnection = require("./config/db");
dbConnection();

// Simple logger
if (process.env.NODE_ENV == "dev") {
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.originalUrl}`);
        next();
    });
}

app.get("/test", (req, res) => {
    res.json({msg: "test route"})
});

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});