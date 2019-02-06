const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewPost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log("I'm in onNewProduct and my current data is, " + JSON.stringify(data))
  api.newPostToApi(data)
    .then(ui.onNewPostSuccess)
    .catch(ui.onNewPostFailure)
}

const onAllPosts = event => {
  event.preventDefault()
  api.getPostsFromApi()
    .then(ui.onAllPostSuccess)
    .catch(ui.onAllPostFailure)
}

const onDeletePost = event => {
  event.preventDefault()
  const data = $('#deleteIt').val()
  api.deletePostFromApi(data)
    .then(ui.onDeletePostSuccess)
    .catch(ui.onDeletePostFailure)
}

const onEditPost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updatePostFromApi(data)
    .then(ui.onUpdatePostSuccess)
    .catch(ui.onUpdatePostFailure)
}

const onNewLocation = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log("I'm in onNewLocation and my current data is, " + JSON.stringify(data))
  api.newLocationToApi(data)
    .then(ui.onNewLocationSuccess)
    .catch(ui.onNewLocationFailure)
}

const onAllLocations = event => {
  event.preventDefault()
  api.getLocationsFromApi()
    .then(ui.onAllLocationSuccess)
    .catch(ui.onAllLocationFailure)
}

const onDeleteLocation = event => {
  event.preventDefault()
  const data = $('#deleteLoc').val()
  api.deleteLocationFromApi(data)
    .then(ui.onDeleteLocationSuccess)
    .catch(ui.onDeleteLocationFailure)
}

const onNewComment = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log("I'm in onNewComment and my current data is, " + JSON.stringify(data))
  api.newCommentToApi(data)
    .then(ui.onNewCommentSuccess)
    .catch(ui.onNewCommentFailure)
}

// const onAllComments = event => {
//   event.preventDefault()
//   api.getCommentsFromApi()
//     .then(ui.onAllCommentSuccess)
//     .catch(ui.onAllCommentFailure)
// }

const onDeleteComment = event => {
  event.preventDefault()
  const data = $('#removeComment').val()
  api.deleteCommentFromApi(data)
    .then(ui.onDeleteCommentSuccess)
    .catch(ui.onDeleteCommentFailure)
}

module.exports = {
  onSignIn,
  onChangePassword,
  onSignOut,
  onSignUp,
  onNewPost,
  onAllPosts,
  onDeletePost,
  onEditPost,
  onNewLocation,
  onDeleteLocation,
  onAllLocations,
  onNewComment,
  // onAllComments,
  onDeleteComment
}
