const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CardButtonSchema = new Schema({
    src: {
        type: String,
        required: true       
    },
    title: {
        type: String,
        required: true,        
    },
    minute: {
        type: String,
        required: true,        
    },
    para: {
        type: String,
        required: true       
    }
})

const CardButton = mongoose.model('cardButtons', CardButtonSchema)

module.exports = CardButton