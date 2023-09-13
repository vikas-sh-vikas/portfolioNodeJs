const createError = require("http-errors")
const mongoose = require('mongoose')
const Card = require("../Models/Card.Model");

module.exports = {
  getAllCard: async (req, res, next) => {
    try {
      const result = await Card.find({}, { __v: 0 });
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  },
  saveCard: async (req, res, next) => {
    try {
      const card = new Card(req.body);
      const result = await card.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === "ValidationError") {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },
  getCardById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Card.findById(id);

      if (!result) {
        throw createError(404, "Card Not Found");
      }

      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "invalid product id"));
        return;
      }
      next(error);
    }
  },
  editCard: async (req, res, next) => {
    try {
      const id = req.params.id;
      const update = req.body;
      const options = { new: true };

      const result = await Card.findByIdAndUpdate(id, update, options);
      console.log(result);
      if (!result) {
        throw createError(404, "Card Not Exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "invalid product id"));
      }
      next(error);
    }
  },
  deleteCard: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Card.findByIdAndDelete(id);
      console.log(result);
      if (!result) {
        throw createError(404, "Card Not Found to delete");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "invalid product id"));
      }
      next(error);
    }
  },
};
 