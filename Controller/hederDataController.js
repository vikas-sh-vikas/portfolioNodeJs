const createError = require("http-errors")
const mongoose = require('mongoose')
const HeaderData = require("../Models/headerData.Model");

module.exports = {
  getHeaderData: async (req, res, next) => {
    try {
      const result = await HeaderData.find({}, { __v: 0 });
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  }
};
 