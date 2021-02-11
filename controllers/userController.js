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

//get user by id
router.get('/get-user/:id', (req, res) => {
  User.findOne({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.send(err)
    } else {
      res.json(result)
    }
  })
})

//update user by id
router.put('/update-user/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    updatedUser => {
      res.json(updatedUser)

    }
  )
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

//delete user by id
router.delete('/delete-user/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, function (err, result) {
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
