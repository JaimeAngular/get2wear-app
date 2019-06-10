'use strict'

module.exports = {
  dev: process.env.NODE_DEV_ENV,
  db: {
    host: process.env.DRESSAPP_DATABASE_LOCATION,
    user: process.env.DRESSAPP_DATABASE_USER,
    password: process.env.DRESSAPP_DATABASE_PASSWORD,
    database: process.env.DRESSAPP_DATABASE_NAME
  },
  telegram: {
    token: process.env.DRESSAPP_TELEGRAM_TOKEN
  },
  gmail: {
    accountId: process.env.GMAIL_ACCOUNT,
    password: process.env.GMAIL_PASSWORD
  },
  aws: {
    s3: {
      bucket: 'dressapp.enrollment',
      permissions: ''
    },
    cognito: {
      region: 'us-east-1',
      IdentityPoolId: 'us-east-1:c21112d1-2681-460b-a3e4-4947c555dad6'
    }
  }
}
