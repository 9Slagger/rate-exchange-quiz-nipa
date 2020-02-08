const dotenv = require("dotenv")
const result = dotenv.config()

if (result.error) {
  throw result.error
}

module.exports = {
  PORT: result.parsed.PORT,
  ENDPOINT: result.parsed.ENDPOINT,
  API_KEY: result.parsed.API_KEY,
}