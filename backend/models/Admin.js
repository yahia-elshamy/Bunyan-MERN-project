const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "password must be at least 6 characters"]
    }
}, {timestamps: true});

// hooks
adminSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
});

adminSchema.methods.comparePassword = async function(matchedPassword) {
    return await bcrypct.compare(matchedPassword, this.password);

};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;