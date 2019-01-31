const config = require('./config.js')
const store = require('./store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newPostToApi = (data) => {
  console.log('data sending to api is', data)
  return $.ajax({
    url: config.apiUrl + `/restrooms`,
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getPostsFromApi = function () {
  // use AJAX to send request
  return $.ajax({
    url: config.apiUrl + '/restrooms',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePostFromApi = function (id) {
  return $.ajax({
    url: config.apiUrl + '/restrooms/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePostFromApi = data => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + `/restrooms/` + data.restroom.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newLocationToApi = (data) => {
  console.log('data sending to api is', data)
  return $.ajax({
    url: config.apiUrl + `/locations`,
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getLocationsFromApi = function () {
  // use AJAX to send request
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteLocationFromApi = function (id) {
  return $.ajax({
    url: config.apiUrl + '/locations/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newCommentToApi = (data) => {
  console.log('data sending to api is', data)
  return $.ajax({
    url: config.apiUrl + `/user_restrooms`,
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getCommentsFromApi = function () {
  // use AJAX to send request
  return $.ajax({
    url: config.apiUrl + '/user_restrooms',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteCommentFromApi = function (id) {
  return $.ajax({
    url: config.apiUrl + '/user_restrooms/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signIn,
  signOut,
  signUp,
  changePassword,
  newPostToApi,
  getPostsFromApi,
  deletePostFromApi,
  updatePostFromApi,
  newLocationToApi,
  deleteLocationFromApi,
  getLocationsFromApi,
  newCommentToApi,
  deleteCommentFromApi,
  getCommentsFromApi
}
