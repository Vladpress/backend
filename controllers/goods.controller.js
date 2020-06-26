const goodsServices = require("../services/goods.service")
async function testMethod(req, res) {
    console.log(req);
    const goods = await goodsServices.findAllGoods();
    res.send(goods);
}

async function findAllGoods(req, res) {
    const goods = await goodsServices.findAllGoods();
    res.send(goods);
}

async function findGoodByID(req, res) {
    const goods = await goodsServices.findGoodByID(req.params.id);
    res.send(goods);
}

async function createGood(req, res) {
    const goods = await goodsServices.createGood(req.body);
    res.send(goods);
}

async function updateGoodByID(req, res) {
    const goods = await goodsServices.updateGoodByID(req.params.id, req.body);
    res.send(goods);
}

module.exports = { findAllGoods, findGoodByID, createGood, updateGoodByID }