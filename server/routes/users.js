
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const development = require('../db/knexfile').development

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getUsers()
    .then((users) => {
      res.send({ users })
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addUser(req.body)
    .then((data) => {
      res.send({ data })
      res.status(202).end()
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
})