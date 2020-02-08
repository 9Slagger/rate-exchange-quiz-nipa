const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./src/config");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("./src/routes/checkStatusServerRouter"));
app.use(require("./src/routes/currencieRouters"));
app.use(require("./src/routes/exchangeRouters"));
app.use((req, res, next) => {
  res.status(404).json({ message: "api not found" });
});

app.listen(PORT, () => {
  console.log(`✅ start server port: ${PORT}`);
});
