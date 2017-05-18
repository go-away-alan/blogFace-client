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

const editBlog = (data, id) => {
  return $.ajax({
    url: config.apiOrigin + '/blogposts/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const submitCreateBlog = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/blogposts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getBlogposts,
  deleteBlog,
  editBlog,
  submitCreateBlog
}
