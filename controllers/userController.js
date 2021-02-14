const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const axios = require('axios')
const Filter = require('bad-words'),
  filter = new Filter()
filter.addWords('dicks', 'fuckton', 'fuckload', 'assload', 'shitload')
let newURL = ''
let randNumb = 0
let userData = {}

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

//login user route
router.post('/login/', (req, res) => {
  console.log(req.body)
  User.findOne({ email: req.body.email.toLowerCase() })
    .then(foundUser => {
      console.log(foundUser)
      bcrypt
        .compare(req.body.password, foundUser.password)
        .then((err, result) => {
          console.log(result)
          if (result) {
            res.json({
              message: 'successfully logged in!',
              token: 'coolbro'
            })
          } else {
            res.status(401).end()
          }
        })
    })
    .catch(err => {
      console.log(err)
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
      res.json({
        message: 'successfully logged in!',
        token: 'coolbro'
      })
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

router.get('/get-insult/', (req, res) => {
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

// route to all passing user data (id, sport, occupation, hobby) from FE to BE

router.post('/data', (req, res) => {
  console.log(req.body)
  userData = req.body
  console.log(userData.sport)
  console.log(userData.hobby)
  console.log(userData.occupation)
})

//start insult templates
const selectTemplate = insultURL => {
  console.log(userData)
  randNumb = Math.floor(Math.random() * Math.floor(5))
  console.log(`Template #${randNumb} selected!`)
  switch (randNumb) {
    //Sports Team insults
    case 0:
      return `https://insult.mattbas.org/api/insult.json?template=The+${userData.sport}+are+as+%3Cadjective%3E+as+%3Carticle+target%3Dadj1%3E+%3Cadjective+min%3D1+max%3D3+id%3Dadj1%3E+%3Camount%3E+of+%3Cadjective+min%3D1+max%3D3%3E+%3Canimal%3E+%3Canimal_part%3E`
    case 1:
      return `https://insult.mattbas.org/api/insult.json?template=Only+${userData.sport}+fans+are+%3Cadjective%3E+%3Canimal%3E+%3Canimal_part%3E`
    //Occupation insults
    case 2:
      return `https://insult.mattbas.org/api/insult.json?template=People+who+are+${userData.occupation}s+secretly+eat+%3Canimal%3E+%3Canimal_part%3E`
    case 3:
      return `https://insult.mattbas.org/api/insult.json?template=So+you%27re+a+${userData.occupation}%3F+I+didn%27t+know+you+were+%3Carticle+target%3Dadj1%3E+%3Cadjective+id%3Dadj1%3E+%3Camount%3E+of+%3Canimal%3E+%3Canimal_part%3E`
    //hobby insults
    case 4:
      return `https://insult.mattbas.org/api/insult.json?template=People+who+like+${userData.hobby}+really+like+%3Canimal%3E+%3Canimal_part%3E+because+they%27re+%3Cadjective%3E`
    default:
      return `https://insult.mattbas.org/api/insult.json?template=You+are+%3Cadjective%3E+if+you+like+${userData.hobby}%2C+you+%3Cadjective%3E+%3Canimal%3E`
  }
}

module.exports = router
