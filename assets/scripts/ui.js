const store = require('./store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  console.log('signUpSuccess ran. Data is :', data)
  $('.authRequests').html('You\'ve successfully signed up!')
  $('#sign-up')[0].reset()
}

const signUpFailure = error => {
  $('#message').text('You have had an issue with signing up!')
  console.error('signUpFailure ran. Error is :', error)
  $('#sign-up')[0].reset()
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('.before').hide()
  $('.home').show()
  $('.after').show()
  $('.authSec').hide()
  console.log('signInSuccess ran. Data is :', data)
  $('#sign-in')[0].reset()
}

const signInFailure = error => {
  $('#message').text('You have had an issue with signing in!')
  console.error('signInFailure ran. Error is :', error)
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  console.log('changePasswordSuccess ran. Data is :', data)
  $('.authRequests').html('You\'ve successfully changed your password!')
  $('#change-password')[0].reset()
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  console.error('changePasswordFailure ran. Error is :', error)
  $('#change-password')[0].reset()
}

const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
  store.user = null
  console.log('signOutSuccess ran. Data is :', data)
  $('.after').hide()
  $('.locations').hide()
  $('.restrooms').hide()
  $('.before').show()
  $('.home').show()
}

const signOutFailure = error => {
  $('.alert').html('')
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const onNewPostSuccess = data => {
  $('.addMess').text('You have posted a restroom!')
  console.log(data)
  $('#restroom-create')[0].reset()
}

const onNewPostFailure = error => {
  $('.addMess').text('You encountered a problem with posting a restroom!')
  console.log(error)
  $('#restroom-create')[0].reset()
}

const onAllPostSuccess = data => {
  console.log(data)
  $('#content').html('')
  data.restrooms.forEach(restrooms => {
    const reviews = restrooms.reviews.map(review => (`
      <p>Cleanliness: ${review.cleanliness}</p>
      <p>Smell: ${review.smell}</p>
    `))
    const onePost = (`
      <h4>Name of Establishment: ${restrooms.name_of_establishment}</h4>
      <p>Location Id: ${restrooms.location_id}</p>
      <p>Cleanliness: ${restrooms.cleanliness}</p>
      <p>Smell: ${restrooms.smell}</p>
      <p>Number of Toilets: ${restrooms.number_of_toilets}</p>
      <p>Handicapp Accessible?: ${restrooms.handicap_accessible}</p>
      <p>Baby Care Friendly?: ${restrooms.baby_care}</p>
      <p>Hours Open: ${restrooms.hours}</p>
      <p>Post ID: #${restrooms.id}</p>
      <p>Reviews: ${reviews}
      <br>
      `)
    $('#content').append(onePost)
  })
}

const onAllPostFailure = error => {
  $('.allMess').text('There was an issue getting all posts!')
  console.log(error)
}

const onUpdatePostSuccess = data => {
  $('.updateMess').text('You have successfully updated a post!')
  console.log(data)
  $('#post-update')[0].reset()
}

const onUpdatePostFailure = error => {
  $('.updateMess').text('There was an issue updating your post!')
  console.log(error)
  $('#post-update')[0].reset()
}

const onDeletePostSuccess = data => {
  $('.delMess').text('You have successfully deleted a post!')
  console.log(data)
  $('#post-delete')[0].reset()
}

const onDeletePostFailure = error => {
  $('.delMess').text('You have run into an error deleted a post!')
  console.log(error)
  $('#post-delete')[0].reset()
}

const onNewLocationSuccess = data => {
  $('.addLocMess').text('You have posted a location!')
  console.log(data)
  $('#location-create')[0].reset()
}

const onNewLocationFailure = error => {
  $('.addLocMess').text('You have hit an error posting a restroom!')
  console.log(error)
  $('#location-create')[0].reset()
}

const onAllLocationSuccess = data => {
  console.log(data)
  $('.contentLoc').html('')
  data.locations.forEach(locations => {
    const onePost = (`
      <h4>Name of Establishment: ${locations.area}</h4>
      <p>Location Id: ${locations.id}</p>
      <br>
      `)
    $('.contentLoc').append(onePost)
  })
}

const onAllLocationFailure = error => {
  $('.addLocMess').text('You have hit an error getting all locations!')
  console.log(error)
}

const onDeleteLocationSuccess = data => {
  $('.delLocMess').text('You have deleted a location!')
  console.log(data)
  $('#loc-delete')[0].reset()
}

const onDeleteLocationFailure = error => {
  $('.delLocMess').text('You have hit an error deleting a location!')
  console.log(error)
  $('#loc-delete')[0].reset()
}

const onNewCommentSuccess = data => {
  $('.addComMess').text('You have successfully added a review!')
  console.log(data)
  $('.addComment')[0].reset()
}

const onNewCommentFailure = error => {
  $('.addComMess').text('You have hit an error adding a review!')
  console.log(error)
  $('.addComment')[0].reset()
}

const onDeleteCommentSuccess = data => {
  $('.delComMess').text('You have successfully deleted a review!')
  console.log(data)
  $('.deleteComment')[0].reset()
}

const onDeleteCommentFailure = error => {
  $('.delComMess').text('You have hit an error deleting your review!')
  console.log(error)
  $('.deleteComment')[0].reset()
}

module.exports = {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signUpFailure,
  signUpSuccess,
  onNewPostSuccess,
  onNewPostFailure,
  onAllPostSuccess,
  onAllPostFailure,
  onUpdatePostFailure,
  onUpdatePostSuccess,
  onDeletePostFailure,
  onDeletePostSuccess,
  onAllLocationFailure,
  onAllLocationSuccess,
  onDeleteLocationSuccess,
  onDeleteLocationFailure,
  onNewLocationSuccess,
  onNewLocationFailure,
  onNewCommentFailure,
  onNewCommentSuccess,
  onDeleteCommentFailure,
  onDeleteCommentSuccess
}
