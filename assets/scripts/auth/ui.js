'use strict'

const signUpSuccess = (data) => {
  console.log('signUpSuccess ran and data is ', data)
}

const signUpFailure = (error) => {
  console.error('sign up failed and the error is ', error)
}

const signInSuccess = (data) => {
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
