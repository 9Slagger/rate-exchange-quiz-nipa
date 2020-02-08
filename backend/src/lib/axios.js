const axios = require("axios");
const { ENDPOINT } = require("../config");

axios.defaults.baseURL = ENDPOINT;

module.exports = axios;
