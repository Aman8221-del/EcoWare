require("dotenv").config();
const express = require("express");
const db = require("./Config/db");
const cors = require("cors");

const app = express();
app.use(cors());



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const QuotesRoute = require("./Routes/Quotes.route");

app.use("/api/quotes", QuotesRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
