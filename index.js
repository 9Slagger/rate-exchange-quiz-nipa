const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("./src/routes/currencieRouters"));
app.use(require("./src/routes/exchangeRouters"));
app.use((req, res, next) => {
  res.status(404).json({ message: "api not found" });
});

app.listen(port, () => {
  console.log(`✅ start server port: ${port}`);
});
