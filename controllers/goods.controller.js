const goodsServices = require("../services/goods.service");

async function findAllGoods(req, res, next) {
    try{
        const goods = await goodsServices.findAllGoods();
        if(!goods) throw new Error('No goods find')
        res.send(goods);
    }
    catch(e){
        next(e)
    }
   
}

async function findGoodByID(req, res, next) {    
    try{
        const goods = await goodsServices.findGoodByID(req.params.id);
        res.send(goods);
    }
    catch(e){    
        next(e)
    }
}

async function createGood(req, res, next) {
    try{
        const goods = await goodsServices.createGood(req.body);
        res.send(goods);
    }
    catch(e){    
        next(e)
    }
}

async function updateGoodByID(req, res, next) {  
    try{
        const goods = await goodsServices.updateGoodByID(req.params.id, req.body);
        res.send(goods);
    }
    catch(e){    
        next(e)
    }
}

module.exports = { findAllGoods, findGoodByID, createGood, updateGoodByID }