const goods = require("./goods.router");
const { Router } = require("express");

const router = Router();

router.use(goods);

module.exports = router;