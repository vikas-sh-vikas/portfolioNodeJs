const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const HeaderDataSchema = new Schema({
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

const HeaderData = mongoose.model('headerDats', HeaderDataSchema)

module.exports = HeaderData