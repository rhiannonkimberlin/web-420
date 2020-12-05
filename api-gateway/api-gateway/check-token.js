/*
============================================
; Title:  check-token.js
; Author: Professor Krasso
; Date:   December 5 2020
; Modified by: Rhiannon Kimberlin
; Description: API Gateway
;===========================================
*/

//Step 2 
var jwt = require('jsonwebtoken');
var config = require('./config');

//@params: req, res, next
function checkToken(req, res, next) {
    var token = req.headers['x-access-token'];

    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.'});

    jwt.verify(token, config.web.secret, function(err, decoded) {
        if (err) 
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'});

        req.userID = decoded.id;
        next();
    });
}

module.exports = checkToken;