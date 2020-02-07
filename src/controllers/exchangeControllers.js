const axios = require("../lib/axios");
const { API_KEY } = require("../config");

module.exports = {
  exchange: async (req, res, next) => {
    try {
      let reslut = 0;
      let { fromShortName, toShortName, amount } = req.body;
      let rateExchange = await axios.get(
        `/convert?q=${fromShortName}_${toShortName}&apiKey=${API_KEY}`
      );
      rateExchange =
        rateExchange.data.results[`${fromShortName}_${toShortName}`].val;
      reslut = amount * rateExchange
      res.status(200).json({ reslut, message: "exchange success" });
    } catch (error) {}
  }
};
