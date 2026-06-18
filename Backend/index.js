require("dotenv").config();
const express = require("express");
const db = require("./Config/db");
const cors = require("cors");

app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const QuotesRoute = require("./Routes/Quotes.route");

app.use("/api/quotes", QuotesRoute);

app.listen("4000", (req, res) => {
  console.log("server started at 4000");
});
