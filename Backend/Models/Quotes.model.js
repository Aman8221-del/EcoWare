const mongoose = require("mongoose");

const QuotesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    
  },
  product: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const QuotesModel = mongoose.model("Quotes", QuotesSchema);
module.exports = QuotesModel;
