'use strict'
const events = require('./events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#signOut').on('click', events.onSignOut)
  $('.addRestroom').on('submit', events.onNewPost)
  $('#getAllPosts').on('click', events.onAllPosts)
  $('.editPost').on('submit', events.onEditPost)
  $('#deletePosts').on('click', events.onDeletePost)
  $('.addLocation').on('submit', events.onNewLocation)
  $('#getAllLocs').on('click', events.onAllLocations)
  $('#deleteLoc').on('click', events.onDeleteLocation)
})
