'use strict'

const api = require('./api')
const ui = require('./ui')
const submitEditButtonTemplate = require('../templates/submitEditButtonTemplate.handlebars')
const getFormFields = require('../../../lib/get-form-fields')

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
      $('.one-blogpost[data-id=' + id + ']').css('background-color', '#f9f9f2')
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
  $('.blogpost-container[data-id=' + id + ']').append(submitEditButtonHtml)
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

const onSubmitCreateBlog = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.submitCreateBlog(data)
    .then(ui.submitCreateBlogSuccess)
    .then(api.getBlogposts)
    .then(ui.getBlogpostsSuccess)
    .then(() => {
      $('.blog-delete-button').on('click', onDeleteBlog)
      $('.blog-edit-button').on('click', onEditBlog)
    })
    .catch(ui.submitCreateBlogFailure)
  $('#create-form').trigger('reset')
  console.log('inside onSubmitCreateBlog function on blogpost-events')
}

const onCreateBlog = function (event) {
  event.preventDefault()
  $('#create-modal').modal('show')
  console.log('inside onCreateBlog function on blogpost-events')
}

const addHandlers = function () {
  $('#create-button').on('click', onCreateBlog)
  $('#create-form').on('submit', onSubmitCreateBlog)
}

module.exports = {
  onGetBlogpost,
  addHandlers
}
