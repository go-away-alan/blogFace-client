'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/auth-events.js')

$(() => {
  authEvents.addHandlers()
  $('#display-page-template-1').on('click', showTemplate1)
})

const showTemplate1 = function (event) {
  event.preventDefault()
  $('#page-template-1-modal').show()
}
