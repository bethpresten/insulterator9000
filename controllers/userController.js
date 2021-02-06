const express = require('express')
const router = express.Router()
const User = require('../models/user')
const id = '601c8bc128788e2d19d28463'

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

//get user by ID
router.get('/get-user', (req, res) => {
  User.findById(id, function (err, result) {
    if (err) {
      res.send(err)
    } else {
      res.json(result)
    }
  })
})

//update user by ID
router.put('/update-user', (req, res) => {
  User.findOneAndUpdate(
    { _id: '601c8bc128788e2d19d28463' },
    { firstname: 'Billy' },
    function (err, result) {
      if (err) {
        res.send(err)
      } else {
        res.json(result)
      }
    }
  )
})

//create/add user
router.post('/create-user', (req, res) => {
  User.create({ firstname: 'Steve' }, function (err, result) {
    if (err) {
      res.send(err)
    } else {
      res.json(result)
    }
  })
})

//delete user
router.delete('/delete-user', (req, res) => {
  User.deleteOne({ firstname: 'Steve' }, function (err, result) {
    if (err) {
      res.send(err)
    } else {
      res.json(result)
    }
  })
})

module.exports = router
