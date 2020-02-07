const express = require("express");
const router = express.Router();
const { exchange } = require("../controllers/exchangeControllers");

router.post("/exchange", exchange);

module.exports = router;
