'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetPages = function () {
  api.getPages()
    .then(ui.getPagesSuccess)
    .catch(ui.getPagesFailure)
}

const showTemplate1 = function (event) {
  event.preventDefault()
  $('#page-template-1-modal').show()
  $('#submit-template-1-button').on('click', scrapeHtml)
  $('#create-page-1-title').on('keyup', function () {
    if ($('#create-page-1-title').val().length !== 0) {
      $('#submit-template-1-button').prop('disabled', false)
    } else {
      $('#submit-template-1-button').prop('disabled', true)
    }
  })
}

const showTemplate2 = function (event) {
  event.preventDefault()
  $('#page-template-2-modal').show()
  $('#submit-template-2-button').on('click', scrapeHtml2)
  $('#create-page-2-title').on('keyup', function () {
    if ($('#create-page-2-title').val().length !== 0) {
      $('#submit-template-2-button').prop('disabled', false)
    } else {
      $('#submit-template-2-button').prop('disabled', true)
    }
  })
}

// Scrapes data for Page Template 1
const scrapeHtml = function (event) {
  event.preventDefault()
  const data = {}
  data.page = {}
  data.page.templateType = 1
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

// Scraptes data for Page Template 2
const scrapeHtml2 = function (event) {
  event.preventDefault()
  const data = {}
  data.page = {}
  data.page.templateType = 2
  const pageTitle = $('#create-page-2-title').val()
  data.page.pageTitle = pageTitle
  const header = $('#template-2-header').text()
  console.log('header is ', header)
  // strip html tags from text - safety against injection
  const strippedHeader = header.replace(/(<([^>]+)>)/ig, '')
  data.page.header = strippedHeader
  const subHeader = $('#template-2-sub-header').text()
  // strip html tags from text - safety against injection
  const strippedSubHeader = subHeader.replace(/(<([^>]+)>)/ig, '')
  data.page.subHeader = strippedSubHeader
  const pageContent = $('#template-2-about').text()
  // strip html tags from text - safety against injection
  const strippedPageContent = pageContent.replace(/(<([^>]+)>)/ig, '')
  data.page.pageContent = strippedPageContent
  const pageContentMore = $('#template-2-more').text()
  // strip html tags from text - safety against injection
  const strippedPageContentMore = pageContentMore.replace(/(<([^>]+)>)/ig, '')
  data.page.pageContentMore = strippedPageContentMore

  // Bug fix for pageContentMore Column 1
  const columnHeader1 = $('#template-header').text()
  // strip html tags from text - safety against injection
  const strippedColumnHeader1 = columnHeader1.replace(/(<([^>]+)>)/ig, '')
  data.page.columnHeader1 = strippedColumnHeader1

  // Bug fix for pageContentMore Column 2
  const columnHeader2 = $('#template-header-2').text()
  // strip html tags from text - safety against injection
  const strippedColumnHeader2 = columnHeader2.replace(/(<([^>]+)>)/ig, '')
  data.page.columnHeader2 = strippedColumnHeader2

  const contact = $('#template-2-email').text()
  // strip html tags from text - safety against injection
  const strippedContact = contact.replace(/(<([^>]+)>)/ig, '')
  data.page.contact = strippedContact
  api.createPage(data)
    .then(ui.createPageSuccess)
    .catch(ui.createPageFailure)
}
const resetTemplate1Fields = function () {
  $('#template-1-header').text('Header')
  $('#template-1-sub-header').text('Sub-Header')
  $('#template-1-about').text('About me..')
  $('#template-1-email').text('example@example.com')
  $('#create-page-1-title').val('')
}

const hideTemplate1 = function (event) {
  event.preventDefault()
  resetTemplate1Fields()
  $('#page-template-1-modal').hide()
  $('#submit-template-1-button').off()
  $('#submit-template-1-button').prop('disabled', true)
}

const resetTemplate2Fields = function () {
  $('#template-2-header').text('Header')
  $('#template-2-sub-header').text('Sub-Header')
  $('#template-2-about').text('About me..')
  $('#template-2-more').text('More info..')
  $('#template-2-email').text('example@email.com')
  $('#create-page-2-title').val('')
}

const hideTemplate2 = function (event) {
  event.preventDefault()
  resetTemplate2Fields()
  $('#page-template-2-modal').hide()
  $('#submit-template-2-button').off()
  $('#submit-template-2-button').prop('disabled', true)
}

const hideTemplate1Edit = function (event) {
  event.preventDefault()
  $('#edit-container').remove()
  $('#page-template-1-edit-modal').hide()
  $('#create-page-1-title').val('')
}

const hideTemplate2Edit = function (event) {
  event.preventDefault()
  $('#edit-container').remove()
  $('#page-template-2-edit-modal').hide()
  $('#create-page-2-title').val('')
}

// const onGetPage = function (event) {
//   const id = $(this).data('id')
//   console.log('Simon says This ID is', $(this).data('id'))
//   event.preventDefault()
//   api.getPage(id)
//   .then(ui.getPageSuccess)
//   .catch(ui.getPageFailure)
// }

const addHandlers = () => {
  $('#display-page-template-1').on('click', showTemplate1)
  $('#display-page-template-2').on('click', showTemplate2)
  $('#cancel-template-1-button').on('click', hideTemplate1)
  $('#cancel-template-2-button').on('click', hideTemplate2)
  $('#cancel-template-1-edit-button').on('click', hideTemplate1Edit)
  $('#cancel-template-2-edit-button').on('click', hideTemplate2Edit)
}

module.exports = {
  addHandlers,
  onGetPages
  // ,
  // onGetPage
}
