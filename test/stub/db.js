'use strict'

import fixtures from '../fixtures/'

export default class DB {
  connect() {
    return Promise.resolve(true)
  }

  disconnect() {
    return Promise.resolve(true)
  }

  getImage(id) {
    return Promise.resolve(fixtures.getImage())
  }
}
