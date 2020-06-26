const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goodScheme = new Schema({
    productName: {
        type: String,
        required: true,
        default: "NoProductName",
        unique: true,
    },
    salePrice: {
        type: Number,
        default: null,
    }
},
{ versionKey: false }
);

const Good = mongoose.model("Good", goodScheme);

module.exports = Good;