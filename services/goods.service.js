const mongoose = require('mongoose');
const Good = require("../models/goods.model");

 const findAllGoods = () => Good.find();

 const findGoodByID = async (id) =>  Good.findById(id); 

 const createGood = async (good) =>  Good.create(good); 

 const updateGoodByID = async (id, good) =>  Good.findByIdAndUpdate(id, good);

module.exports = {findAllGoods, findGoodByID, createGood, updateGoodByID}