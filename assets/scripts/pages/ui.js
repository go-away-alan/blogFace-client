'use strict'
const displaySinglePageTemplate = require('../../templates/load-single-page.handlebars')

const createPageSuccess = function (data) {
  console.log('data is ', data)
  const iframe = document.getElementById('template-1-iframe')
  // reloads the iframe and clears fields to the template is fresh
  iframe.src += ''
  $('#page-template-1-modal').hide()
}

const createPageFailure = function (error) {
  console.error('ERROR ', error)
}

const getPageSuccess = function (data) {
  console.log('data is ', data)
  const iframe = document.getElementById('get-iframe')
  // reloads the iframe and clears fields to the template is fresh
  iframe.src += ''
  const showPageHtml = displaySinglePageTemplate({ page: data.page })
  $('#get-page-display').append(showPageHtml)
}

const getPageFailure = function (error) {
  console.error('ERROR ', error)
}

module.exports = {
  createPageSuccess,
  createPageFailure,
  getPageSuccess,
  getPageFailure
}
