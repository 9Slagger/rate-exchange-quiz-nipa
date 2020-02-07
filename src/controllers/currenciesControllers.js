const axios = require("../lib/axios");

module.exports = {
  getcurrencies: async (req, res, next) => {
    try {
      let result = [];
      let currencies = await axios.get(
        "/currencies?apiKey=do-not-use-this-key"
      );
      [currencies.data.results];
      for (const property in currencies.data.results) {
        result.push({ shortName: property, ...currencies.data.results[property] });
      }
      res.status(200).json({ result, message: "get currencies success" });
    } catch (error) {
      console.log(
        "❌ log for pm2, error function getcurrencies at currenciesControllers",
        error
      );
      res.status(400).json({ message: "something went wrong" });
    }
  }
};
