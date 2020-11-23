/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   19 October 2020
; Modified by: Rhiannon Kimberlin
; Description: Assignment 1.4
;===========================================
*/

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

var User = module.exports = mongoose.model('user', userSchema);

//user.save is used to add a new user in our database
module.exports.add=(user, callback) => {
    user.save(callback);
};

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
}