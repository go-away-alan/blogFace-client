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
  const data = {
    'blogpostTitle': blogpostTitle,
    'blogpostContent': blogpostContent
  }
  console.log(data)
  // api.editBlog(data)
  //   .then(ui.editBlogSuccess)
  //   .catch(ui.editBlogFailure)
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
