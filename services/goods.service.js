const mongoose = require('mongoose');
const Good = require("../models/goods.model");
async function findAllGoods() {
    try {
        return Good.find();
      } catch(err) {
       console.log(err)
      }
}

async function findGoodByID(id) {
    try {
        return Good.findById(id);
      } catch(err) {
       console.log(err)
      }
}

async function createGood(good) {
    try {
        return Good.create(good);
      } catch(err) {
       console.log(err)
      }
}

async function updateGoodByID(id, good) {
    try {
        return Good.findByIdAndUpdate(id, good);
      } catch(err) {
       console.log(err)
      }
}

module.exports = {findAllGoods, findGoodByID, createGood, updateGoodByID}