'use strict'
const displaySinglePageTemplate = require('../../templates/load-editable-temp-1.handlebars')
const displaySinglePageTemplate2 = require('../../templates/load-editable-temp-2.handlebars')
const pageDisplayer = require('../../templates/pageDisplayer.handlebars')
// const pageEvents = require('./page-events.js')
const api = require('./api.js')
const pageStore = require('../pageStore')

const getPagesSuccess = function (data) {
  // console.log('here are the user pages ', data)
  if (data.pages.length < 1) {
    $('.page-content').append('<h3>No Pages</h3>')
  } else {
    const pageShower = pageDisplayer({ pages: data.pages })
    $('.page-content').append(pageShower)
    $('.madePage').on('click', onGetPage)
  }
}

const onGetPage = function (event) {
  event.preventDefault()
  const id = $(this).data('id')
  // console.log('Simon says This ID is', $(this).data('id'))
  api.getPage(id)
  .then(getPageSuccess)
  .catch(getPageFailure)
}

const getPagesFailure = function (error) {
  console.error('ERROR ', error)
}

const createPageSuccess = function (data) {
  // console.log('data is ', data)
  resetTemplate1Fields()
  resetTemplate2Fields()
  $('#page-template-1-modal').hide()
  $('#page-template-2-modal').hide()
  // Resetting click handlers on create modals to avoid duplicate POSTS if user creates another Page
  $('#submit-template-1-button').off()
  $('#submit-template-2-button').off()
  $('#submit-template-1-button').prop('disabled', true)
  $('#submit-template-2-button').prop('disabled', true)
  $('.page-content').empty()
  api.getPages(data)
    .then(getPagesSuccess)
    .catch(getPagesSuccess)
}

const resetTemplate1Fields = function () {
  $('#template-1-header').text('Header')
  $('#template-1-sub-header').text('Sub-Header')
  $('#template-1-about').text('About me..')
  $('#template-1-email').text('example@example.com')
  $('#create-page-1-title').val('')
}

const resetTemplate2Fields = function () {
  $('#template-2-header').text('Header')
  $('#template-2-sub-header').text('Sub-Header')
  $('#template-2-about').text('About Me')
  $('#template-header').text('About Me')
  $('#template-header-2').text('More Info..')
  $('#template-2-more').text('More Info..')
  $('#template-2-email').text('example@example.com')
  $('#create-page-2-title').val('')
}

const createPageFailure = function (error) {
  console.error('ERROR ', error)
}

const updateSuccess = function (data) {
  // console.log(data)
  $('#delete-template-1-edit-button').off()
  $('#delete-template-2-edit-button').off()
  $('#submit-template-1-edit-button').off()
  $('#submit-template-2-edit-button').off()
  $('#page-template-1-edit-modal, #page-template-2-edit-modal').hide()
  $('#edit-container').remove()
  $('.page-content').empty()
  api.getPages(data)
    .then(getPagesSuccess)
    .catch(getPagesSuccess)
}

const updateFailure = function (error) {
  console.error(error)
}

// Allows you to edit the page.
const onEditPage = function (event) {
  event.preventDefault()
  // const id = $(this).data('id')
  const tempStyle = pageStore.templateType
  if (tempStyle === 1) {
    scrapeHtml()
  } else {
    scrapeHtml2()
  }
}

const getPageSuccess = function (data) {
  // console.log('data is ', data)
  if (data.page.templateType === 1) {
    $('#page-template-1-edit-modal').show()
    $('#edit-page-1-title').val(data.page.pageTitle)
    $('#submit-template-1-edit-button').on('click', onEditPage)
    // AJZ
    $('#delete-template-1-edit-button').on('click', onDestroyPage)
    showPageHtml(data)
  } else {
    $('#page-template-2-edit-modal').show()
    $('#edit-page-2-title').val(data.page.pageTitle)
    $('#submit-template-2-edit-button').on('click', onEditPage)
    // AJZ
    $('#delete-template-2-edit-button').on('click', onDestroyPage)
    showPageHtml(data)
  }
  const pageStoreId = data.page.id
  pageStore.id = pageStoreId

  const templateType = data.page.templateType
  pageStore.templateType = templateType
  // console.log('PAGESTORE TEMP TYPE IS', pageStore.templateType)
}

const showPageHtml = function (data) {
  // console.log('SIMON SAYS DATA IS ', data)
  if (data.page.templateType === 1) {
    const pageRenderT1 = displaySinglePageTemplate({ page: data.page })
    // console.log('ANDY SAYS showPageHtml IS ', pageRenderT1)
    // console.log('ANDY SAYS DATA IS ', data)
    $('#page-1-template-edit').append(pageRenderT1)
    $('#edit-page-1-title').val(data.page.pageTitle)
  } else {
    const pageRenderT2 = displaySinglePageTemplate2({ page: data.page })
    $('#page-2-template-edit').append(pageRenderT2)
    $('#edit-page-2-title').val(data.page.pageTitle)
  }
}

const getPageFailure = function (error) {
  console.error('ERROR ', error)
}

// Copy

// Scrapes data for Page Template 1
const scrapeHtml = function () {
  const data = {}
  data.page = {}
  data.page.templateType = 1
  const pageTitle = $('#edit-page-1-title').val()
  data.page.pageTitle = pageTitle
  const header = $('#modal1-edit-header').text()
  // console.log('header is ', header)
  // strip html tags from text - safety against injection
  // const strippedHeader = header.replace(/(<([^>]+)>)/ig, '')
  data.page.header = header
  const subHeader = $('#modal1-edit-subheader').text()
  // strip html tags from text - safety against injection
  const strippedSubHeader = subHeader.replace(/(<([^>]+)>)/ig, '')
  data.page.subHeader = strippedSubHeader
  const pageContent = $('#modal1-edit-about').text()
  // strip html tags from text - safety against injection
  const strippedPageContent = pageContent.replace(/(<([^>]+)>)/ig, '')
  data.page.pageContent = strippedPageContent
  const contact = $('#modal1-edit-contact').text()
  // strip html tags from text - safety against injection
  const strippedContact = contact.replace(/(<([^>]+)>)/ig, '')
  data.page.contact = strippedContact
  // console.log('WHAT AM I?', data)
  api.editPage(data)
    .then(updateSuccess)
    .catch(updateFailure)
  pageStore.id = null
  pageStore.templateType = null
  // console.log('NOW WHAT AM I?', data)
}

// Scraptes data for Page Template 2
const scrapeHtml2 = function () {
  const data = {}
  data.page = {}
  data.page.templateType = 2
  const pageTitle = $('#edit-page-2-title').val()
  data.page.pageTitle = pageTitle
  const header = $('#modal2-edit-header').text()
  // console.log('header is ', header)
  // strip html tags from text - safety against injection
  const strippedHeader = header.replace(/(<([^>]+)>)/ig, '')
  data.page.header = strippedHeader
  const subHeader = $('#modal2-edit-subheader').text()
  // strip html tags from text - safety against injection
  const strippedSubHeader = subHeader.replace(/(<([^>]+)>)/ig, '')
  data.page.subHeader = strippedSubHeader
  const pageContent = $('#modal2-edit-about').text()
  // strip html tags from text - safety against injection
  const strippedPageContent = pageContent.replace(/(<([^>]+)>)/ig, '')
  data.page.pageContent = strippedPageContent
  const pageContentMore = $('#modal2-edit-more').text()
  // strip html tags from text - safety against injection
  const strippedPageContentMore = pageContentMore.replace(/(<([^>]+)>)/ig, '')
  data.page.pageContentMore = strippedPageContentMore

  // Bug fix for pageContentMore Column 1
  const columnHeader1 = $('#modal2-edit-column-header1').text()
  // strip html tags from text - safety against injection
  const strippedColumnHeader1 = columnHeader1.replace(/(<([^>]+)>)/ig, '')
  data.page.columnHeader1 = strippedColumnHeader1

  // Bug fix for pageContentMore Column 2
  const columnHeader2 = $('#modal2-edit-column-header2').text()
  // strip html tags from text - safety against injection
  const strippedColumnHeader2 = columnHeader2.replace(/(<([^>]+)>)/ig, '')
  data.page.columnHeader2 = strippedColumnHeader2

  const contact = $('#modal2-edit-contact').text()
  // strip html tags from text - safety against injection
  const strippedContact = contact.replace(/(<([^>]+)>)/ig, '')
  data.page.contact = strippedContact
  // console.log('WHAT AM I?', data)
  api.editPage(data)
    .then(updateSuccess)
    .catch(updateFailure)
  pageStore.id = null
  pageStore.templateType = null
  // console.log('NOW WHAT AM I?', data)
}

// Allows you to destroy the page.
const onDestroyPage = function (event) {
  event.preventDefault()
  const id = pageStore.id
  api.destroyPage(id)
    .then(destroySuccess)
    .catch(destroyFailure)
  pageStore.id = null
  pageStore.templateType = null
  $('#page-1-template-edit, #page-2-template-edit').empty()
}

const destroySuccess = function (data) {
  // console.log(data)
  $('.page-content').empty()
  $('#delete-template-1-edit-button').off()
  $('#delete-template-2-edit-button').off()
  $('submit-template-1-edit-button').off()
  $('submit-template-2-edit-button').off()
  $('#page-template-1-edit-modal').hide()
  $('#page-template-2-edit-modal').hide()
  // console.log('HI STEEEEVE', pageStore.id)
  api.getPages(data)
    .then(getPagesSuccess)
    .catch(getPagesSuccess)
}

const destroyFailure = function (error) {
  console.error(error)
}

module.exports = {
  createPageSuccess,
  createPageFailure,
  getPageSuccess,
  getPageFailure,
  getPagesSuccess,
  getPagesFailure
}
