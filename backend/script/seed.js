require("dotenv").config();
const mongoose = require("mongoose");
const Admin = require("../models/Admin");

const addSuperAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB is matched");
        
        const existAdmin = await Admin.findOne({email: process.env.EMAIL_ADMIN});
        if(existAdmin) return console.log("email is already taken");

        const superAdmin = await Admin.create({
            username: "Super admin",
            email: process.env.EMAIL_ADMIN,
            password: "admin1234"
        });

        console.log(superAdmin);
    } catch(error) {
        console.log(error);
    } finally {
        await mongoose.connection.close();
        console.log("DB is closed");
        process.exit(0);
    }
}

addSuperAdmin();