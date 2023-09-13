const createError = require("http-errors")
const mongoose = require('mongoose')
const CompanyDetail = require("../Models/companyDetail.Model");

module.exports = {
  getCompanyDetail: async (req, res, next) => {
    try {
      const result = await CompanyDetail.find({}, { __v: 0 });
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  }
};
 