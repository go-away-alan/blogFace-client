'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetBlogpost = function () {
  api.getBlogposts()
    .then(ui.getBlogpostsSuccess)
    .catch(ui.getBlogPostFailure)
}

module.exports = {
  onGetBlogpost
}
