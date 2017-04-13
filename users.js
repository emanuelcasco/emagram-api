'use strict'

import { send, json } from 'micro'
import HttpHash from 'http-hash'
import DB from 'emagram-db'
import DbStub from './test/stub/db'
import config from './config'

const env = process.env.NODE_ENV || 'production'

let db = new DB(config.db)

if (env === 'test') {
  db = new DbStub()
}

const hash = HttpHash()

hash.set('GET /list', async function list (req, res, params) {
  await db.connect()
  let images = await db.getImages()
  await db.disconnect()
  send(res, 200, images)
})
