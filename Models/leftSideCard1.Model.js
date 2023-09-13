const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const leftcard1Schema = new Schema({
    header1: {
        type: String,
        required: true       
    },
    headerR: {
        type: String,
        required: true,        
    },
    headerN: {
        type: String,
        required: true       
    },
    src: {
        type: String,
        required: true       
    },
    paragraph1: {
        type: String,
        required: true       
    },
    paragraph2: {
        type: String,
        required: true       
    },
    paragraph3: {
        type: String,
        required: true       
    },
    header2: {
        type: String,
        required: true       
    },
    paragraph4: {
        type: String,
        required: true       
    },
    paragraph5: {
        type: String,
        required: true       
    },
    header3: {
        type: String,
        required: true       
    },
    paragraph6: {
        type: String,
        required: true       
    }

})

const leftcard1 = mongoose.model('leftcard1s', leftcard1Schema)

module.exports = leftcard1