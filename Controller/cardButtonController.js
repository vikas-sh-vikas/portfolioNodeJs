const createError = require("http-errors")
const mongoose = require('mongoose')
const CardButton = require("../Models/cardButton.Model");

module.exports = {
  getAllCardButton: async (req, res, next) => {
    try {
      const result = await CardButton.find({}, { __v: 0 });
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  }
};
 