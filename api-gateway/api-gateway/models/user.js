/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   November 23 2020
; Modified by: Rhiannon Kimberlin
; Description: API Gateway
;===========================================
*/

/**
Fields username, password, and email
*/
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
 username: String,
 password: String,
 email: String
});

var User = module.exports = mongoose.model('User', userSchema);
/**
Database queries
*/

//Assignment 4.3 Step 1 Callback Functions
//Add
module.exports.add = (user, callback) => {
    user.save(callback);
};

//GetById
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query,callback);
};

//Assignment 6.3 Step 1 Add query for finding individual users by email address
module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
};