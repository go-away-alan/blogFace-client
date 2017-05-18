'use strict'
const displaySinglePageTemplate = require('../../templates/load-editable-temp-1.handlebars')
const displaySinglePageTemplate2 = require('../../templates/load-editable-temp-2.handlebars')
const pageDisplayer = require('../../templates/pageDisplayer.handlebars')

const getPagesSuccess = function (data) {
  console.log('here are the user pages ', data)
  const pageShower = pageDisplayer({ pages: data.pages })
  $('.page-content').append(pageShower)
}

const getPagesFailure = function (error) {
  console.error('ERROR ', error)
}

const createPageSuccess = function (data) {
  console.log('data is ', data)
  resetTemplate1Fields()
  $('#page-template-1-modal').hide()
  $('#page-template-2-modal').hide()
  // Resetting click handlers on create modals to avoid duplicate POSTS if user creates another Page
  $('#submit-template-1-button').off()
  $('#submit-template-2-button').off()
  $('#submit-template-1-button').prop('disabled', true)
  $('#submit-template-2-button').prop('disabled', true)
}

const resetTemplate1Fields = function () {
  $('#template-1-header').text('Header')
  $('#template-1-sub-header').text('Sub-Header')
  $('#template-1-about').text('About me..')
  $('#template-1-email').text('example@example.com')
  $('#create-page-1-title').val('')
}

const createPageFailure = function (error) {
  console.error('ERROR ', error)
}

const getPageSuccess = function (data) {
  console.log('data is ', data)
  if (data.page.templateType === 1) {
    $('#page-template-1-edit-modal').show()
    $('#edit-page-1-title').val(data.page.pageTitle)
    showPageHtml(data)
  } else {
    $('#page-template-2-edit-modal').show()
    $('#edit-page-2-title').val(data.page.pageTitle)
    showPageHtml(data)
  }
}

const showPageHtml = function (data) {
  console.log('SIMON SAYS DATA IS ', data)
  if (data.page.templateType === 1) {
    const pageRenderT1 = displaySinglePageTemplate({ page: data.page })
    console.log('ANDY SAYS showPageHtml IS ', pageRenderT1)
    console.log('ANDY SAYS DATA IS ', data)
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

module.exports = {
  createPageSuccess,
  createPageFailure,
  getPageSuccess,
  getPageFailure,
  getPagesSuccess,
  getPagesFailure
}
