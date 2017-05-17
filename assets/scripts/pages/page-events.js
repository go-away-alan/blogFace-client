'use strict'

const api = require('./api')
const ui = require('./ui')

const showTemplate1 = function (event) {
  event.preventDefault()
  $('#page-template-1-modal').show()
  $('#submit-template-1-button').on('click', scrapeHtml)
}

const showTemplate2 = function (event) {
  event.preventDefault()
  $('#page-template-2-modal').show()
  // $('#submit-template-2-button').on('click', scrapeHtml2)
}

const scrapeHtml = function (event) {
  event.preventDefault()
  const data = {}
  data.page = {}
  const pageTitle = $('#create-page-1-title').val()
  data.page.pageTitle = pageTitle
  const header = $('#template-1-header').text()
  console.log('header is ', header)
  // strip html tags from text - safety against injection
  const strippedHeader = header.replace(/(<([^>]+)>)/ig, '')
  data.page.header = strippedHeader
  const subHeader = $('#template-1-sub-header').text()
  // strip html tags from text - safety against injection
  const strippedSubHeader = subHeader.replace(/(<([^>]+)>)/ig, '')
  data.page.subHeader = strippedSubHeader
  const pageContent = $('#template-1-about').text()
  // strip html tags from text - safety against injection
  const strippedPageContent = pageContent.replace(/(<([^>]+)>)/ig, '')
  data.page.pageContent = strippedPageContent
  const contact = $('#template-1-email').text()
  // strip html tags from text - safety against injection
  const strippedContact = contact.replace(/(<([^>]+)>)/ig, '')
  data.page.contact = strippedContact
  console.log('data is ', data)
  api.createPage(data)
    .then(ui.createPageSuccess)
    .catch(ui.createPageFailure)
}

const resetTemplate1Fields = function () {
  $('#template-1-header').text('Header')
  $('#template-1-sub-header').text('Sub-Header')
  $('#template-1-about').text('About me..')
  $('#template-1-email').text('example@example.com')
}

const hideTemplate1 = function (event) {
  event.preventDefault()
  resetTemplate1Fields()
  $('#page-template-1-modal').hide()
}

const resetTemplate2Fields = function () {
  $('#template-2-header').text('Header')
  $('#template-2-sub-header').text('Sub-Header')
  $('#template-2-about').text('About me..')
  $('#template-2-more').text('More info..')
  $('#template-2-email').text('example@email.com')
}

const hideTemplate2 = function (event) {
  event.preventDefault()
  resetTemplate2Fields()
  $('#page-template-2-modal').hide()
}

const hideTemplate1Edit = function (event) {
  event.preventDefault()
  $('#edit-container').remove()
  $('#page-template-1-edit-modal').hide()
}

const onGetPage = function () {
  const id = $('#id-field').val()
  console.log('id is ', id)
  event.preventDefault()
  api.getPage(id)
  .then(ui.getPageSuccess)
  .catch(ui.getPageFailure)
}

const addHandlers = () => {
  $('#display-page-template-1').on('click', showTemplate1)
  $('#display-page-template-2').on('click', showTemplate2)
  $('#cancel-template-1-button').on('click', hideTemplate1)
  $('#cancel-template-2-button').on('click', hideTemplate2)
  $('#id-form').on('submit', onGetPage)
  $('#cancel-template-1-edit-button').on('click', hideTemplate1Edit)
}

module.exports = {
  addHandlers
}
