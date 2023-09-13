const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const leftcard3Schema = new Schema({
    header1: {
        type: String,
        required: true       
    },
    paragraph1: {
        type: String,
        required: true,        
    },
    link1: {
        type: String,
        required: true       
    },
    link2: {
        type: String,
        required: true       
    },
    link3: {
        type: String,
        required: true       
    },
    link4: {
        type: String,
        required: true       
    }
})

const leftcard3 = mongoose.model('leftcard3s', leftcard3Schema)

module.exports = leftcard3
