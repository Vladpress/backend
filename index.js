"use strict";
const express = require("express");
const bodyParser = require("body-parser");
var goods = require('./goods');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.port || 4444;

app.get("/", (req, res) => {
    res.send("Hello API")
});

app.get("/goods", (req, res) => {
    res.send(goods)
});

app.get("/goods/:id", (req, res) => {
    let good = goods.find((good) => good.id === req.params.id)
    res.send(good);
});  

app.post("/goods", (req, res) => {
    console.log(req.body);
    const good = {
        "id": Date.now(),
        "productName": req.body.productName,                 
    }
    goods.push(good);
    res.send(good);
});

app.put("/goods/:id", (req, res) => {
    let good = goods.find((good) => good.id === req.params.id);
    good.productName = req.body.productName;
    res.send(good);
});  

app.listen(port, err => {
  if (err) {
    return console.log("ERROR", err);
}
  console.log(`Listening on port ${port}`);
});
