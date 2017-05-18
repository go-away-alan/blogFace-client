'use strict'

const config = require('../config')
const store = require('../store')
const pageStore = require('../pageStore')

// Pulls pages for current user on authentication
const getPages = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/pages',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getPage = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

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

const editPage = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + pageStore.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroyPage = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/pages/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getPages,
  createPage,
  getPage,
  editPage,
  destroyPage
}
