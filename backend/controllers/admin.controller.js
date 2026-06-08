const Admin = require("../models/Admin");
const {loginSchema} = require("../validators/authAdmin");
const jwt = require("jsonwebtoken");


const login = async (req, res, next) => {
    try {
        const {error, value} = loginSchema.validate(req.body, {abortEarly: false, stripUnknown: true});
        if(error) return res.status(400).json({
            message: error.details.map((e)=> e.message)
        });

        const {email, password} = value;

        const admin = await Admin.findOne({email});
        
        if(!admin) return res.status(400).json({message: "Invalid email or password"});

        const isMatch = await admin.comparePassword(password);

        if(!isMatch) return res.status(400).json({message: "Invalid email or password"});

        const token = await jwt.sign({id: admin._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );

        res.status(200).json({message: "Login successfully", token});

    } catch(error) {
        next(error);
    }
}

module.exports = {login};