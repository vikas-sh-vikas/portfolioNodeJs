const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CardSchema = new Schema({
    src: {
        type: String,
        required: true       
    },
    title: {
        type: String,
        required: true,        
    },
    para: {
        type: String,
        required: true       
    }
})

const Card = mongoose.model('cards', CardSchema)

module.exports = Card