'use strict'

const SchemaValidator = require('./schema')
const { array } = require('../checks')

module.exports = class ArrayValidator extends SchemaValidator {
  constructor() {
    super()

    this.addCheck(array())
  }

  notEmpty() {
    return this.addCheck(array.notEmpty())
  }

  getShape() {
    return [...this._shape || []]
  }
}