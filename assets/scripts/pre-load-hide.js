'use strict'

const preLoad = () => {
  $('#signup-error').hide()
  $('#signin-error').hide()
  $('#changepw-error').hide()
  document.getElementsByClassName('alert alert-danger').innerHTML = ''
}

module.exports = {
  preLoad
}
