const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goodScheme = new Schema({
    productName: {
        type: String,
        required: true,
        unique: true
    },
    salePrice: {
        type: Number,
        required: true,
        default: null,
    },
    img: {
        type: String,
        required: true,
        default: null,
    }
},
{ versionKey: false }
);

module.exports = mongoose.model("Good", goodScheme);

