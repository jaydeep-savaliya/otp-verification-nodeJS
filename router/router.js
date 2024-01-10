const express = require('express');
const { sendOTP, verifyOTP } = require('../controller/twilio-sms');
const routes = express.Router();

routes.route("/send-otp").post(sendOTP);
routes.route("/verify-otp").post(verifyOTP);

module.exports = routes