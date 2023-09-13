const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CompanyDetailSchema = new Schema({
    header: {
        type: String,
        required: true       
    },
    src: {
        type: String,
        required: true       
    },
    paragraph1: {
        type: String,
        required: true,        
    },
    paragraph3: {
        type: String,
        required: true       
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
    header2: {
        type: String,
        required: true       
    },
    address: {
        type: String,
        required: true       
    },
    address1: {
        type: String,
        required: true       
    },
    address2: {
        type: String,
        required: true       
    },
    mail: {
        type: String,
        required: true       
    },
    phone: {
        type: String,
        required: true       
    }
})

const CompanyDetail = mongoose.model('companyDetails', CompanyDetailSchema)

module.exports = CompanyDetail