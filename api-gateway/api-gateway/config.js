/*
============================================
; Title:  config.js
; Author: Professor Krasso
; Date:   November 23 2020
; Modified by: Rhiannon Kimberlin
; Description: API Gateway
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;

//Assignment 2.3 Public Key
config.web.secret = 'topsecret';

