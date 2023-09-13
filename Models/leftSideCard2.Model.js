const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const leftcard2Schema = new Schema({
    header1: {
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
    }

})

const leftcard2 = mongoose.model('leftcard2s', leftcard2Schema)

module.exports = leftcard2
