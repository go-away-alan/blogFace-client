'use strict'

const showTemplate1 = function (event) {
  event.preventDefault()
  $('#page-template-1-modal').show()
}

const addHandlers = () => {
  $('#display-page-template-1').on('click', showTemplate1)
}

module.exports = {
  addHandlers
}
