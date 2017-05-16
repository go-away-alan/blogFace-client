'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran and data is ', data)
  $('#signup-modal').modal('hide')
}

const signUpFailure = (error) => {
  console.error('sign up failed and the error is ', error)
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('sign in ran and data is ', data)
  $('#signin-modal').modal('hide')
}

const signInFailure = (error) => {
  console.error('sign in failed and the error is ', error)
}

const changePasswordSuccess = (data) => {
  console.log('change password ran and data is ', data)
  $('#changepassword-modal').modal('hide')
}

const changePasswordFailure = (error) => {
  console.error('change password failed and the error is ', error)
}

const signOutSuccess = (data) => {
  store.user = null
  console.log('sign in ran and data is ', data)
  $('#signout-modal').modal('hide')
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
