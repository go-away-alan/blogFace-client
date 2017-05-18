'use strict'

const store = require('../store')
const blogpostEvents = require('../blogposts/blogpost-events.js')
const pageEvents = require('../pages/page-events.js')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran and data is ', data)
  $('#signup-modal').modal('hide')
  $('#signup-error').hide()
  $('.signout-menu-item').hide()
  $('.changepassword-menu-item').hide()
  $('.signup-menu-item').hide()
  $('.signin-menu-item').show()
}

const signUpFailure = (error) => {
  console.error('sign up failed and the error is ', error)
  $('#signup-error').show()
}

const signInSuccess = (data) => {
  store.user = data.user
  pageEvents.onGetPages()
  console.log('sign in ran and data is ', data)
  $('#signin-modal').modal('hide')
  $('#signin-error').hide()
  $('#landing-page-content').hide()
  $('#dashboard, .dash-container').show()
  blogpostEvents.onGetBlogpost()
  $('#signout-menu-item').show()
  $('.changepassword-menu-item').show()
  $('.signup-menu-item').hide()
  $('.signin-menu-item').hide()
}

const signInFailure = (error) => {
  console.error('sign in failed and the error is ', error)
  $('#signin-error').show()
}

const changePasswordSuccess = (data) => {
  console.log('change password ran and data is ', data)
  $('#changepassword-modal').modal('hide')
  $('#changepw-error').hide()
}

const changePasswordFailure = (error) => {
  console.error('change password failed and the error is ', error)
  $('#changepw-error').show()
}

const signOutSuccess = (data) => {
  store.user = null
  console.log('sign in ran and data is ', data)
  $('#signout-modal').modal('hide')
  $('#landing-page-content').show()
  $('#dashboard').hide()
  $('.signup-menu-item').show()
  $('.signin-menu-item').show()
  $('.changepassword-menu-item').hide()
  $('.signout-menu-item').hide()
}

const signOutFailure = (error) => {
  console.error('sign out failed and the error is ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
