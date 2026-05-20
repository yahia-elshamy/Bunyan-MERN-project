const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB is connected successfully");
    } catch(err) {
        console.log("Failed to connect");
    }
}

module.exports = dbConnection;