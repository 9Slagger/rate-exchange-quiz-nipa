const axios = require("../lib/axios");
const { API_KEY } = require("../config");

module.exports = {
  getcurrencies: async (req, res, next) => {
    try {
      let result = [];
      let currencies = await axios.get(`/currencies?apiKey=${API_KEY}`);
      [currencies.data.results];
      for (const property in currencies.data.results) {
        result.push({ ...currencies.data.results[property] });
      }
      result = result.sort((a, b) => a.id.localeCompare(b.id));
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
