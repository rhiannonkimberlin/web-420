/*
============================================
; Title:  api-catalog.js
; Author: Professor Krasso
; Date:   19 October 2020
; Modified by: Rhiannon Kimberlin
; Description: Assignment 1.4
;===========================================
*/

var express = require('express');
var router = express.Router();

var auth_controller = require('../controllers/authController');

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

module.exports = router;

// Allow new User Requests
router.post('/auth/login', auth_controller.user_login);

//Allow User Logout Requests
router.get('/auth/logout', auth_controller.user_logout);