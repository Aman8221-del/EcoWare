const express = require("express");
const router = express.Router();

const { GenrateQuote } = require("../Controllers/Quote.controller");

router.post("/", GenrateQuote);

module.exports = router;
