'use strict'

const config = require('../config')
const store = require('../store')

const createPage = (data) => {
  console.log('ajax data is', data)
  return $.ajax({
    url: config.apiOrigin + '/pages',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createPage
}
