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
  $('.home').hide()
  $('.sgnup').show()
})

$('.goHome').click(function () {
  $('.authSec').hide()
  $('.locations').hide()
  $('.restrooms').hide()
  $('.home').show()
})

$('.signIn').click(function () {
  $('.authSec').hide()
  $('.home').hide()
  $('.sgnin').show()
})

$('.changePass').click(function () {
  $('.authSec').hide()
  $('.home').hide()
  $('.cp').show()
})

$('.urLocs').click(function () {
  $('.authSec').hide()
  $('.restrooms').hide()
  $('.home').hide()
  $('#informLoc').hide()
  $('#contentLoc').hide()
  $('#message').hide()
  $('.locations').show()
})

$('.urPosts').click(function () {
  $('.authSec').hide()
  $('.locations').hide()
  $('.home').hide()
  $('#message').hide()
  $('#inform').hide()
  $('#content').hide()
  $('.restrooms').show()
})

$('#addOnePost').click(function () {
  $('#content').hide()
  $('#message').hide()
  $('#inform').show()
})

$('#getAllPosts').click(function () {
  $('#message').hide()
  $('#inform').hide()
  $('#content').show()
})

$('#addOneLoc').click(function () {
  $('#contentLoc').hide()
  $('#message').hide()
  $('#informLoc').show()
})

$('#getAllLocs').click(function () {
  $('#message').hide()
  $('#informLoc').hide()
  $('#contentLoc').show()
})