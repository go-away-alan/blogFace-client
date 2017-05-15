'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran and data is ', data)
}

const signUpFailure = (error) => {
  console.error('sign up failed and the error is ', error)
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('sign in ran and data is ', data)
}

const signInFailure = (error) => {
  console.error('sign in failed and the error is ', error)
}

const changePasswordSuccess = (data) => {
  console.log('change password ran and data is ', data)
}

const changePasswordFailure = (error) => {
  console.error('change password failed and the error is ', error)
}

const signOutSuccess = (data) => {
  store.user = null
  console.log('sign in ran and data is ', data)
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
