const store = require('./store.js')

const signUpSuccess = data => {
  $('.alert').html('')
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
  $('#signUpModal').modal('toggle')
  $('.authRequests').html('You\'ve successfully signed up!')
}

const signUpFailure = error => {
  $('.alert').html('')
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('.alert').html('')
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is :', data)
  $('.buttModals').hide()
  $('#signInModal').modal('toggle')
  $('#cgPss').show()
  $('#sgOut').show()
  $('.dadBod').show()
  $('#signUppp').hide()
  $('.authRequests').html('You\'ve successfully signed in!')
  $('.opening').show()
}

const signInFailure = error => {
  $('.alert').html('')
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('.alert').html('')
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
  $('#changePasswordModal').modal('toggle')
  $('.authRequests').html('You\'ve successfully changed your password!')
}

const changePasswordFailure = error => {
  $('.alert').html('')
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('.alert').html('')
  $('#message').text('Signed out successfully')
  store.user = null
  console.log('signOutSuccess ran. Data is :', data)
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
  $('#content').html('')
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
  onNewLocationFailure
}
