const createError = require("http-errors")
const mongoose = require('mongoose')
const leftcard1 = require("../Models/leftSideCard1.Model");

module.exports = {
  getLeftCard1: async (req, res, next) => {
    try {
      const result = await leftcard1.find({}, { __v: 0 });
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  }
};
 