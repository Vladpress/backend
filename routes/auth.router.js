const { checkUser } = require('../controllers/auth.controller');
const { Router } = require("express");
const router = Router();

router.post("/auth", checkUser);

module.exports = router;