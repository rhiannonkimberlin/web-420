/*
============================================
; Title:  api-catalog.js
; Author: Professor Krasso
; Date:   November 23 2020
; Modified by: Rhiannon Kimberlin
; Description: API Gateway
;===========================================
*/

//Week 8 require Statements Step 4a
var express =require('express');
var checkToken = require('../check-token');
var router = express.Router();

var auth_controller = require('../controllers/authController');

//Assignment 2.3 Step 6
/**
* API Routes
*/
var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);
module.exports = router;

//Assignment 6.3 Step 3 Allow new user login requests
router.post('/auth/login', auth_controller.user_login);

//Assignment 6.3 Step 5 Allow User logout Requests
router.get('/auth/logout', auth_controller.user_logout);