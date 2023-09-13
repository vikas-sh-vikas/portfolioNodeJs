const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IconDataSchema = new Schema({
    title: {
        type: String,
        required: true,        
    },
    para: {
        type: String,
        required: true       
    }
})

const IconData = mongoose.model('iconDatas', IconDataSchema)

module.exports = IconData