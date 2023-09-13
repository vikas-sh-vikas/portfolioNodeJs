const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FooterDaySchema = new Schema({
    header: {
        type: String,
        required: true       
    },
    title: {
        type: String,
        required: true,        
    },
    paragraph: {
        type: String,
        required: true       
    },
    month: {
        type: String,
        required: true       
    },
    day: {
        type: String,
        required: true       
    }
})

const FooterDay = mongoose.model('footerDayDatas', FooterDaySchema)

module.exports = FooterDay