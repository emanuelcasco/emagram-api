'use strict'

import fixtures from '../fixtures/'

export default class DB {
  connect () {
    return Promise.resolve(true)
  }

  disconnect () {
    return Promise.resolve(true)
  }

  getImage (id) {
    return Promise.resolve(fixtures.getImage())
  }

  getImages () {
    return Promise.resolve(fixtures.getImages())
  }

  getUser (username) {
    return Promise.resolve(fixtures.getUser())
  }

  saveImage (image) {
    return Promise.resolve(fixtures.getImage())
  }

  saveUser (user) {
    return Promise.resolve(fixtures.getUser())
  }

  likeImage (id) {
    let image = fixtures.getImage()
    image.liked = true
    image.likes = 1
    return Promise.resolve(image)
  }

  getImagesByTag (tag) {
    return Promise.resolve(fixtures.getImagesByTag())
  }

  authenticate () {
    return Promise.resolve(true)
  }
}
