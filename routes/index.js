const goods = require("./goods.router");
const auth = require("./auth.router");
const { Router } = require("express");

const router = Router();

router.use(auth);
//router.use(checkToken);
router.use(goods);


module.exports = router;