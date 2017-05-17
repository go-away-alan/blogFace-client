'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran and data is ', data)
  $('#signup-modal').modal('hide')
  $('#signup-error').hide()
}

const signUpFailure = (error) => {
  console.error('sign up failed and the error is ', error)
  $('#signup-error').show()
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('sign in ran and data is ', data)
  $('#signin-modal').modal('hide')
  $('#signin-error').hide()
  $('#landing-page-content').hide()
  $('#dashboard, .dash-container').show()
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
