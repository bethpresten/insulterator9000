const express = require('express')
const router = express.Router()
const User = require('../models/user')
const id = "601c8bc128788e2d19d28463"

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

router.get('/find', (req, res) => {
  User.findById(id, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});

router.post('/', (req, res) => {
  console.log(req.body)
  User.create(req.body).then(newUser)
  res.json(newUser)
})

module.exports = router
