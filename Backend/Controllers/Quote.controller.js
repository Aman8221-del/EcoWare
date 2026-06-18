const Quotesmodel = require("../Models/Quotes.model");

const GenrateQuote = async (req, res) => {
  try {
    const { name, phone, email, product, message } = req.body;
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    if (!phone.match(/^[6-9]\d{9}$/)) {
      return res.status(400).json({
        message: "Invalid phone number",
      });
    }
    const newQuote = new Quotesmodel({
      name,
      phone,
      email,
      product,
      message,
    });
    const savedQuote = await newQuote.save();
    res.status(201).json({ message: "Quote sent", data: savedQuote });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  GenrateQuote,
};
