'use strict'
const displaySinglePageTemplate = require('../../templates/load-single-page.handlebars')

const createPageSuccess = function (data) {
  console.log('data is ', data)
  // const iframe = document.getElementById('template-1-iframe')
  // // reloads the iframe and clears fields to the template is fresh
  // iframe.src += ''
  resetTemplate1Fields()
  $('#page-template-1-modal').hide()
}

const resetTemplate1Fields = function () {
  $('#template-1-header').text('Header')
  $('#template-1-sub-header').text('Sub-Header')
  $('#template-1-about').text('About me..')
  $('#template-1-email').text('example@example.com')
}

const createPageFailure = function (error) {
  console.error('ERROR ', error)
}

const getPageSuccess = function (data) {
  console.log('data is ', data)
  $('#page-template-1-edit-modal').show()
  const showPageHtml = displaySinglePageTemplate({ page: data.page })
  $('#page-1-template-edit').append(showPageHtml)
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
