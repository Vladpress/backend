const mongoose = require('mongoose');
const Good = require("../models/goods.model");
async function findAllGoods() {  
  return Good.find();     
}

async function findGoodByID(id) {
  return Good.findById(id);
}

async function createGood(good) {    
  return Good.create(good);     
}

async function updateGoodByID(id, good) { 
  return Good.findByIdAndUpdate(id, good);      
}

module.exports = {findAllGoods, findGoodByID, createGood, updateGoodByID}