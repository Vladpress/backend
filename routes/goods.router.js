
const { Router } = require("express");
const verifyToken = require("../middelwares/auth.middelwares")

const { findAllGoods, findGoodByID, createGood, updateGoodByID } = require('../controllers/goods.controller');

const router = Router();

router.use(verifyToken);

router.get("/goods", findAllGoods);
 
router.get("/goods/:id", findGoodByID);  

router.post("/goods", createGood);

router.put("/goods/:id", updateGoodByID);

module.exports = router;