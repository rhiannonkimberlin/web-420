/*
============================================
; Title:  config.js
; Author: Professor Krasso
; Date:   19 October 2020
; Modified by: Rhiannon Kimberlin
; Description: Assignment 1.4
;===========================================
*/

var config = {};
config.web={};
config.web.port = process.env.PORT || '3000';
module.exports=config;

config.web.secret = 'topsecret';