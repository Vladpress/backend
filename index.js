"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const router = require("./routes");
const cors = require('cors');

const {logErrors, clientErrorHandler, errorHandler} = require("./utills");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.port || 4444;
app.use(cors());
app.use(router);
app.use(logErrors);
app.use(clientErrorHandler);

mongoose.connect("mongodb://localhost:27017/goods", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    app.listen(port, err => {
        if (err) {
            console.log("ERROR", err);
            return;
        }
        console.log(`Listening on port ${port}`);
    });
});
