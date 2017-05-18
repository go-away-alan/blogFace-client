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
const pageEvents = require('./pages/page-events')
const preLoadHide = require('./pre-load-hide')
const blogpostEvents = require('./blogposts/blogpost-events.js')

preLoadHide.preLoad()

$(() => {
  authEvents.addHandlers()
  pageEvents.addHandlers()
  blogpostEvents.addHandlers()
})
