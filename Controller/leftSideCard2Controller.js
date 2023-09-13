const createError = require("http-errors")
const mongoose = require('mongoose')
const leftcard2 = require("../Models/leftSideCard2.Model");

module.exports = {
  getLeftCard2: async (req, res, next) => {
    try {
      const result = await leftcard2.find({}, { __v: 0 });
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  }
};
 