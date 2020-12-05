/*
============================================
; Title:  index.js
; Author: Professor Krasso
; Date:   November 23 2020
; Modified by: Rhiannon Kimberlin
; Description: API Gateway
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
