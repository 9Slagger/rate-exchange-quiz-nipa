const express = require("express");
const router = express.Router();
const { getcurrencies } = require("../controllers/currenciesControllers");

router.get("/currencies", getcurrencies);

module.exports = router;
