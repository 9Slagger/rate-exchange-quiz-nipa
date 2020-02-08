const axios = require("../lib/axios");
const { API_KEY } = require("../config");

module.exports = {
  exchange: async (req, res, next) => {
    try {
      let result = 0;
      let { fromShortName, toShortName, amount } = req.body;
      let rateExchange = await axios.get(
        `/convert?q=${fromShortName}_${toShortName}&apiKey=${API_KEY}`
      );
      rateExchange =
        rateExchange.data.results[`${fromShortName}_${toShortName}`].val;
      result = amount * rateExchange
      res.status(200).json({ result, message: "exchange success" });
    } catch (error) {
      console.log(
        "❌ log for pm2, error function exchange at exchangeControllers",
        error
      );
      res.status(400).json({ message: "something went wrong" });
    }
  }
};
