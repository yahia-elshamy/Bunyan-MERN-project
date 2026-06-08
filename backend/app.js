require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

// const cors = require("cors");
// app.use(cors());

const dbConnection = require("./config/db");
dbConnection();

// Simple logger
// if (process.env.NODE_ENV == "dev") {
//     app.use((req, res, next) => {
//         console.log(`${req.method} ${req.originalUrl}`);
//         next();
//     });
// }

const morgan = require("morgan");
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
} else {
    app.use(morgan("combined"));
}

app.get("/test", (req, res) => {
    res.json({msg: "test route"})
});

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;

const adminRoutes = require("./routes/adminRoute");
app.use("/api/dashboard", adminRoutes);

const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");
app.use(errorHandlerMiddleware);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});