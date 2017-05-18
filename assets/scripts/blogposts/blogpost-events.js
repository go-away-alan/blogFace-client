'use strict'

const api = require('./api')
const ui = require('./ui')
const submitEditButtonTemplate = require('../templates/submitEditButtonTemplate.handlebars')

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

const onSubmitEdit = function (event) {
  event.preventDefault()
  const blogpostTitle = $(this).parent().find('h2')[0].innerHTML
  const blogpostContent = $(this).parent().find('p')[0].innerHTML
  const id = $(this).prev().attr('data-id')
  const data = {
    'blogpost': {
      'blogpostTitle': blogpostTitle,
      'blogpostContent': blogpostContent
    }
  }
  api.editBlog(data, id)
    .then(ui.editBlogSuccess)
    .then(() => {
      $('p[data-id=' + id + ']').attr('contenteditable', 'false')
      $('h2[data-id=' + id + ']').attr('contenteditable', 'false')
      $('.one-blogpost[data-id=' + id + ']').css('background-color', 'yellow')
      $('#submit-edit').remove()
    })
    .catch(ui.editBlogFailure)
}

const onEditBlog = function (event) {
  console.log('inside on edit blog')
  const id = $(this).attr('data-id')
  $('p[data-id=' + id + ']').attr('contenteditable', 'true')
  $('h2[data-id=' + id + ']').attr('contenteditable', 'true')
  $('.one-blogpost[data-id=' + id + ']').css('background-color', 'white')
  const submitEditButtonHtml = submitEditButtonTemplate({})
  $('#blogpost-container').append(submitEditButtonHtml)
  $('#submit-edit').on('click', onSubmitEdit)
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
