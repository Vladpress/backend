"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.port || 4444;

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

mongoose.connect("mongodb://localhost:27017/goods", { useNewUrlParser: true, useUnifiedTopology: true });

const Good = mongoose.model("Good", goodScheme);

app.get("/goods", (req, res) => {    
    Good.find()
    .then((good) => {
        console.log("Найден объект", good);
        res.send(good);
    })
    .catch(function (err) {
        console.log(err);
    });
});

app.get("/goods/:id", (req, res) => {
    Good.findById(req.params.id)
    .then((good) => {
        console.log("Найден объект" + "___" + req.params.id, good);
        res.send(good);
    })
    .catch(function (err) {
        console.log(err);
    }); 
});  

app.post("/goods", (req, res) => {
    Good.create(req.body)
    .then((good) => {
        console.log("Создан объект", good);
        res.send(req.body);
    })
    .catch(function (err) {
        console.log(err);
    });
});

app.put("/goods/:id", (req, res) => {
    Good.findByIdAndUpdate(req.params.id, req.body)
    .then((good) => {
        console.log("Изменен объект", req.body);
        res.send(good);
    })
    .catch(function (err) {
        console.log(err);
    });
});

app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
});
