const createError = require("http-errors")
const mongoose = require('mongoose')
const IconData = require("../Models/iconData.Model");

module.exports = {
  getIconData: async (req, res, next) => {
    try {
      const result = await IconData.find({}, { __v: 0 });
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  }
};
 