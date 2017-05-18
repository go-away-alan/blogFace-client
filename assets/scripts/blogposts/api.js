'use strict'

const config = require('../config')
const store = require('../store')

const getBlogposts = () => {
  return $.ajax({
    url: config.apiOrigin + '/blogposts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteBlog = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/blogposts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBlogposts,
  deleteBlog
}
