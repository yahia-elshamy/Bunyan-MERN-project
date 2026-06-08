const jwt = require("jsonwebtoken");

const authTokenMiddleware = async (req, res, next) => {
    try {
        const existingToken = req.headers.authorization;
        if(!existingToken || !existingToken.startsWith("Bearer ")) return res.status(400).json({message: "Token is not provided"});

        const token = existingToken.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) return res.status(400).json({message: "Invalid token"});

            req.user = decoded;
            next();
        })

    } catch(error) {
        next(error);
    }
}

module.exports = authTokenMiddleware;