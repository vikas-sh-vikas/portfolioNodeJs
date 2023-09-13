const createError = require("http-errors")
const mongoose = require('mongoose')
const FooterDay = require("../Models/footerDayData.Model");

module.exports = {
  getFooterDay: async (req, res, next) => {
    try {
      const result = await FooterDay.find({}, { __v: 0 });
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  }
};
 