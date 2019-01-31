const store = require('./store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  console.log('signUpSuccess ran. Data is :', data)
  $('.authRequests').html('You\'ve successfully signed up!')
}

const signUpFailure = error => {
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('.before').hide()
  $('.home').show()
  $('.after').show()
  $('.authSec').hide()
  console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = error => {
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  console.log('changePasswordSuccess ran. Data is :', data)
  $('.authRequests').html('You\'ve successfully changed your password!')
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  console.error('changePasswordFailure ran. Error is :', error)
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

const onNewProductSuccess = data => {
  console.log(data)
  $('#product-create')[0].reset()
}

const onNewProductFailure = error => {
  console.log(error)
}

const onAllPostSuccess = data => {
  console.log(data)
  $('#content').html('')
  data.restrooms.forEach(restrooms => {
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
      <br>
      `)
    $('#content').append(onePost)
  })
}

const onAllPostFailure = error => {
  console.log(error)
}

const onUpdatePostSuccess = data => {
  console.log(data)
}

const onUpdatePostFailure = error => {
  console.log(error)
}

const onDeletePostSuccess = data => {
  console.log(data)
}

const onDeletePostFailure = error => {
  console.log(error)
}

const onNewProLocationSuccess = data => {
  console.log(data)
  $('#product-create')[0].reset()
}

const onNewLocationFailure = error => {
  console.log(error)
}

const onAllLocationSuccess = data => {
  console.log(data)
  $('#contentLoc').html('')
  data.locations.forEach(locations => {
    const onePost = (`
      <h4>Name of Establishment: ${locations.area}</h4>
      <p>Location Id: ${locations.id}</p>
      <br>
      `)
    $('#contentLoc').append(onePost)
  })
}

const onAllLocationFailure = error => {
  console.log(error)
}

const onDeleteLocationSuccess = data => {
  console.log(data)
}

const onDeleteLocationFailure = error => {
  console.log(error)
}

const onNewCommentSuccess = data => {
  console.log(data)
  $('#product-create')[0].reset()
}

const onNewCommentFailure = error => {
  console.log(error)
}

const onAllCommentSuccess = data => {
  console.log(data)
  $('#content').html('')
  // eslint-disable-next-line camelcase
  data.user_restrooms.forEach(user_restrooms => {
    const onePost = (`
      <p>Restroom Id: ${user_restrooms.restroom_id}</p>
      <p>Cleanliness: ${user_restrooms.cleanliness}</p>
      <p>Smell: ${user_restrooms.smell}</p>
      <p>Comment ID: #${user_restrooms.id}</p>
      <br>
      `)
    $('#getAllComms').append(onePost)
  })
}

const onAllCommentFailure = error => {
  console.log(error)
}

const onDeleteCommentSuccess = data => {
  console.log(data)
}

const onDeleteCommentFailure = error => {
  console.log(error)
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
  onNewProductSuccess,
  onNewProductFailure,
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
  onNewProLocationSuccess,
  onNewLocationFailure,
  onNewCommentFailure,
  onNewCommentSuccess,
  onDeleteCommentFailure,
  onDeleteCommentSuccess,
  onAllCommentFailure,
  onAllCommentSuccess
}
