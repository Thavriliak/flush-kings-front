'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/app.js')

// styles
require('./assets/styles/index.scss')

$('.signUp').click(function () {
  $('.authSec').hide()
  $('.sgnin').show()
})

$('.signIn').click(function () {
  $('.authSec').hide()
  $('.sgnup').show()
  
})

$('.changePass').click(function () {
  $('.authSec').hide()
  $('.cp').show()
})

$('.urLocs').click(function () {
})

$('.urPosts').click(function () {
})