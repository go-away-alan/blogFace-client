'use strict'

const api = require('./api')
const ui = require('./ui')

const scrapeHtml = function (event) {
  event.preventDefault()
  const iframe = $('#template-1-iframe').contents()
  const data = {}
  data.page = {}
  const header = iframe.find('#template-1-header').text()
  // strip html tags from text - safety against injection
  const strippedHeader = header.replace(/(<([^>]+)>)/ig, '')
  data.page.header = strippedHeader
  const subHeader = iframe.find('#template-1-sub-header').text()
  // strip html tags from text - safety against injection
  const strippedSubHeader = subHeader.replace(/(<([^>]+)>)/ig, '')
  data.page.subHeader = strippedSubHeader
  const pageContent = iframe.find('#template-1-about').text()
  // strip html tags from text - safety against injection
  const strippedPageContent = pageContent.replace(/(<([^>]+)>)/ig, '')
  data.page.pageContent = strippedPageContent
  const contact = iframe.find('#template-1-email').text()
  // strip html tags from text - safety against injection
  const strippedContact = contact.replace(/(<([^>]+)>)/ig, '')
  data.page.contact = strippedContact
  console.log('data is ', data)
  api.createPage(data)
    .then(ui.createPageSuccess)
    .catch(ui.createPageFailure)
}

const showTemplate1 = function (event) {
  event.preventDefault()
  $('#page-template-1-modal').show()
  $('#submit-template-1-button').on('click', scrapeHtml)
}

const hideTemplate1 = function (event) {
  event.preventDefault()
  const iframe = document.getElementById('template-1-iframe')
  // reloads the iframe and clears fields to the template is fresh
  iframe.src += ''
  $('#page-template-1-modal').hide()
}

const addHandlers = () => {
  $('#display-page-template-1').on('click', showTemplate1)
  $('#cancel-template-1-button').on('click', hideTemplate1)
}

module.exports = {
  addHandlers
}
