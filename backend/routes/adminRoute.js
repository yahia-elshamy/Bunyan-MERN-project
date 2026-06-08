const express = require("express");
const router = express.Router();

const {login} = require("../controllers/admin.controller");
const authTokenMiddleware = require("../middlewares/authTokenMiddleware");

router.post("/login", login);

module.exports = router;