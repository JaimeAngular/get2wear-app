var config = require('./config')
var pg = require('pg')

var pool = null

var dbConfig = {
  user: config.db.user,
  database: config.db.database,
  password: config.db.password,
  host: config.db.host,
  port: 5432,
  max: 10,
  idleTimeoutMillis: 20000
}

exports.connect = function(done) {
  if(pool == null) {
    pool = new pg.Pool(dbConfig)
  }
  done()
}

exports.query = function(mode, query, params) {
  return new Promise((resolve, reject) => {
    pool.connect(function(err, client, done) {
      if(err) {
        console.error('error fetching client from pool', err)
        reject(err)
      }
      client.query(query, params, function(err, result) {
  
        // Release connection
        if(mode) {
          client.release(true)
        } else {
          done()
        }
  
        if(err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  })
}