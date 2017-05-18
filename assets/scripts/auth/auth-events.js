'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const preLoadHide = require('../pre-load-hide')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#signup-form').trigger('reset')
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#signin-form').trigger('reset')
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  $('#changepassword-form').trigger('reset')
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const closeModal = function () {
  preLoadHide.preLoad()
  $('#changepassword-form').trigger('reset')
  $('#signup-form').trigger('reset')
  $('#signin-form').trigger('reset')
}

const hideAboutShowSignin = function () {
  $('#about-modal').modal('hide')
}

const hideSigninShowSignup = function () {
  $('#signin-modal').modal('hide')
  $('#signup-modal').modal('show')
  $('#signin-error').hide()
}

const addHandlers = () => {
  $('#signup-form').on('submit', onSignUp)
  $('#signin-form').on('submit', onSignIn)
  $('#changepassword-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#signup-close').on('click', closeModal)
  $('#signin-close').on('click', closeModal)
  $('#changepassword-close').on('click', closeModal)
  $('#getStartedWithinAboutModal-button').on('click', hideAboutShowSignin)
  $('#signupWithinSigninModal-button').on('click', hideSigninShowSignup)
  $('.signout-menu-item').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
