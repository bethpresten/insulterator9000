const express = require('express')
const router = express.Router()
const User = require('../models/user')
const axios = require('axios')
const Filter = require('bad-words'),
  filter = new Filter()
filter.addWords('dicks', 'fuckton', 'fuckload', 'assload')
const selectTemplate = require('./insultTemplates')
let newURL = ''

//get all users
router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      console.log(err)
      res.status(500).end()
    })
})

//get user by email
router.get('/get-user/:email', (req, res) => {
  User.findOne({ email: req.params.email }, function (err, result) {
    if (err) {
      res.send(err)
    } else {
      res.json(result)
    }
  })
})

//update user by email
router.put('/update-user/:email', (req, res) => {
  User.updateOne({ email: req.params.email }, req.body, function (err, result) {
    if (err) {
      res.send(err)
    } else {
      res.json(result)
      console.log(result)
    }
  })
})

//create/add user
router.post('/create-user', (req, res) => {
  User.create(req.body, function (err, result) {
    //use req.body.email & req.body.password here...
    if (err) {
      res.send(err)
    } else {
      res.json(result)
    }
  })
})

//delete user by email
router.delete('/delete-user/:email', (req, res) => {
  User.deleteOne({ email: req.params.email }, function (err, result) {
    if (err) {
      res.send(err)
    } else {
      res.json(result)
    }
  })
})

// get insult from 3rd party API route

router.get('/get-insult', (req, res) => {
  newURL = selectTemplate()
  axios
    .get(newURL)
    .then(response => {
      console.log(`before: ${response.data.insult}`)
      console.log(`after: ${filter.clean(response.data.insult)}`)
      res.json(`${filter.clean(response.data.insult)}`)
    })
    .catch(error => {
      console.log(error)
    })
})

module.exports = router
