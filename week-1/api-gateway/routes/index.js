/*
============================================
; Title:  index.js
; Author: Professor Krasso
; Date:   19 October 2020
; Modified by: Rhiannon Kimberlin
; Description: Assignment 1.4
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API Gateway' 
  });
});

module.exports = router;