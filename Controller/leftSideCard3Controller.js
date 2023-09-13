const createError = require("http-errors")
const mongoose = require('mongoose')
const leftcard3 = require("../Models/leftSideCard3Model");

module.exports = {
  getLeftCard3: async (req, res, next) => {
    try {
      const result = await leftcard3.find({}, { __v: 0 });
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  }
};
 