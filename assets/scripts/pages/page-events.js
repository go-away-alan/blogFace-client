'use strict'

const api = require('./api')
const ui = require('./ui')

const scrapeHtml = function (event) {
  event.preventDefault()
  const iframe = $('#template-1-iframe').contents()
  const data = {}
  const header = iframe.find('#template-1-header-text').html()
  data.header = header
  const subHeader = iframe.find('#template-1-sub-header-text').html()
  data.subHeader = subHeader
  const pageContent = iframe.find('#template-1-about-text').html()
  data.pageContent = pageContent
  const contact = iframe.find('#template-1-email-text').html()
  data.contact = contact
  console.log('data is ', data)
  const jsonData = JSON.stringify(data)
  console.log(jsonData)
  api.createPage(jsonData)
    .then(ui.createPageSuccess)
    .catch(ui.createPageFailure)
}

const showTemplate1 = function (event) {
  event.preventDefault()
  $('#page-template-1-modal').show()
  $('#change-password-button').on('click', scrapeHtml)
  $('#change-password-button').prop('disabled', false)
}

const addHandlers = () => {
  $('#display-page-template-1').on('click', showTemplate1)
}

module.exports = {
  addHandlers
}
