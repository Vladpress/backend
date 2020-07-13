const goodsServices = require("../services/goods.service");

async function findAllGoods(req, res, next) {
    try{
        console.log('====', req.user, '====')
        const goods = await goodsServices.findAllGoods();
        if(!goods) throw new Error('No goods find')
        res.json(goods);
    }
    catch(e){
        next(e)
    }
   
}

async function findGoodByID(req, res, next) {    
    try{
        const good = await goodsServices.findGoodByID(req.params.id);
        res.send(good);
    }
    catch(e){    
        next(e)
    }
}

async function createGood(req, res, next) {
    try{        
        const isUniqueName = await goodsServices.findGood({productName: req.body.productName});
        if (isUniqueName.length) {
            return res.status(400).json({ productName: 'This name exists' })
        }

        const good = await goodsServices.createGood(req.body);
            return res.send(good);
       
    }
    catch(e){    
        next(e)
    }
}

async function updateGoodByID(req, res, next) {  
    try{
        const isUniqueName = await goodsServices.findGood({productName: req.body.productName});
        if (isUniqueName.length) {
            return res.status(400).json({ productName: 'This name exists'})
        }

        const goods = await goodsServices.updateGoodByID(req.params.id, req.body);
        res.send(goods);
    }
    catch(e){    
        next(e)
    }
}

module.exports = { findAllGoods, findGoodByID, createGood, updateGoodByID }