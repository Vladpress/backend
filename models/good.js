const mongoose = require("../lib/mongoose"),
Schema = mongoose.Schema;

const schema = new Schema({
    productName: {
        type: String,
        unique: true,
        required: true
    }
})