const createError = require("http-errors")
const mongoose = require('mongoose')
const FooterLink = require("../Models/footerLink.Model");

module.exports = {
  getFooterLink: async (req, res, next) => {
    try {
      const result = await FooterLink.find({}, { __v: 0 });
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  }
};
 