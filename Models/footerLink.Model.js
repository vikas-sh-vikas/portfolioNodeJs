const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FooterLinkSchema = new Schema({
    linkData: {
        type: String,
        required: true       
    },
    linkData1: {
        type: String,
        required: true,        
    },
    para: {
        type: String,
        required: true       
    }
})

const FooterLink = mongoose.model('footerLinks', FooterLinkSchema)

module.exports = FooterLink