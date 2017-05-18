'use strict'

const api = require('./api')
const ui = require('./ui')

const onDeleteBlog = function (event) {
  event.preventDefault()
  const id = $(this).attr('data-id')
  api.deleteBlog(id)
    .then(ui.deleteBlogSuccess)
    .then(() => {
      $('.one-blogpost[data-id=' + id + ']').parent().hide('blind')
    })
    .catch(ui.deleteBlogFailure)
}

const onEditBlog = function (event) {
  console.log('inside on edit blog')
  const id = $(this).attr('data-id')
  $('p[data-id=' + id + ']').attr('contenteditable', 'true')
  $('h2[data-id=' + id + ']').attr('contenteditable', 'true')
  $('.one-blogpost[data-id=' + id + ']').css('background-color', 'white')
}

const onGetBlogpost = function () {
  api.getBlogposts()
    .then(ui.getBlogpostsSuccess)
    .then(() => {
      $('.blog-delete-button').on('click', onDeleteBlog)
      $('.blog-edit-button').on('click', onEditBlog)
    })
    .catch(ui.getBlogPostFailure)
}

module.exports = {
  onGetBlogpost
}
