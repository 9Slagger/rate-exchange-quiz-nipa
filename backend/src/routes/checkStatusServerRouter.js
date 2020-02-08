const express = require("express");
const router = express.Router();
const { getStatus } = require("../controllers/checkStatusServerControllers");

router.get("/checkstatusserver", getStatus);

module.exports = router;
