'use strict'

const showBlogpostsTemplate = require('../templates/show-blogposts-template.handlebars')

const getBlogpostsSuccess = (data) => {
  console.log('got the blogposts :) here they are ', data)
  const showBlogpostsHtml = showBlogpostsTemplate({ blogposts: data.blogposts })
  $('.blogpost-content').append(showBlogpostsHtml)
}

const getBlogpostsFailure = (error) => {
  console.log('failed to get the blogposts sorry ', error)
}

module.exports = {
  getBlogpostsSuccess,
  getBlogpostsFailure
}
