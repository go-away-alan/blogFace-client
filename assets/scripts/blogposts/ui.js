'use strict'

const showBlogpostsTemplate = require('../templates/show-blogposts-template.handlebars')

const getBlogpostsSuccess = (data) => {
  const showBlogpostsHtml = showBlogpostsTemplate({ blogposts: data.blogposts })
  $('.blogpost-content').append(showBlogpostsHtml)
  console.log('inside getBlogpostsSuccess ', data)
}

const getBlogpostsFailure = (error) => {
  console.log('failed to get the blogposts sorry ', error)
}

const deleteBlogSuccess = (data) => {
  console.log('delte blog post success and nothing is returned')
}

const deleteBlogFailure = (error) => {
  console.log('delete blog did not work and error is ', error)
}

const editBlogSuccess = (data) => {
  console.log('edit blog post success and data is ', data)
}

const editBlogFailure = (error) => {
  console.log('delete blog did not work and error is ', error)
}

const submitCreateBlogSuccess = (data) => {
  console.log('create blog post success and data is ', data)
  $('#create-modal').modal('hide')
  $('.blogpost-content').empty()
}

const submitCreateBlogFailure = (error) => {
  console.log('create blog did not work and error is ', error)
}

module.exports = {
  getBlogpostsSuccess,
  getBlogpostsFailure,
  deleteBlogSuccess,
  deleteBlogFailure,
  editBlogSuccess,
  editBlogFailure,
  submitCreateBlogSuccess,
  submitCreateBlogFailure
}
