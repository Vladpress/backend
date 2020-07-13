const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/key');
const User = require("../models/user.model");

 const checkUser = async (data) => {
        // user = User.find({ meail });
        // isValidPassword = data.paswsword ===
    // var salt = bcrypt.genSaltSync(10);
    // var hash = bcrypt.hashSync("1111", salt);
    // console.log(hash);

    const user = await User.findOne({email: data.email});
    //console.log(user[0].password === data.password);
    if (user) {
        // var salt = bcrypt.genSaltSync(10);
        // var hash = bcrypt.hashSync("B4c0/\/", salt);
        // console.log("hash", hash);
      
        const passwordResult = bcrypt.compareSync(data.password, user.password);

        if (passwordResult) {
            //TOKEN
            
            return jwt.sign({
                email: user.email,
                userId: user._id
            }, keys.jwt.secret, {expiresIn: 60 * 60});
            
            // jwt.verify(token, keys.jwt, function(err, decoded) {
            //     console.log("decoded", decoded) // bar
            //   });

            //res.status(200).json({token: `Bearer ${token}`})
        } else {
            // res.status(401).json({
            //     message: 'Passwords not equal' 
            // })
            throw new Error('Passwords not equal');

        }

    } else {
        // res.status(404).json({
        //     message: 'User with such email not found'
        // })

        throw new Error('User with such email not found');
    }
}

module.exports = { checkUser }