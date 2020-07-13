const authServices = require("../services/auth.service");


async function checkUser(req, res, next) {

    try{
        const token = await authServices.checkUser({email: req.body.email, password: req.body.password});
        //console.log("token", candidate);
        
        res.json(token);
    }
    catch(e){    
        next(e)
    }
    
    
}

module.exports = { checkUser };