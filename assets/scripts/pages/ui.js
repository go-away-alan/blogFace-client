'use strict'

const createPageSuccess = function (data) {
  console.log('data is ', data)
}

const createPageFailure = function (error) {
  console.error('ERROR ', error)
}

module.exports = {
  createPageSuccess,
  createPageFailure
}
