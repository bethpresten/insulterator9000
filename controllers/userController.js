const express = require('express')
const router = express.Router()
const User = require('../models/user')
const axios = require('axios')
const Filter = require('bad-words'),
  filter = new Filter()
filter.addWords('dicks', 'fuckton', 'fuckload', 'assload')
const sportsTeam = 'Bucaneers'

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

//get insult from 3rd party API route
router.get('/get-insult', (req, res) => {
  axios
    .get(
      `https://insult.mattbas.org/api/insult.json?template=The+${sportsTeam}+are+as+%3Cadjective%3E+as+%3Carticle+target%3Dadj1%3E+%3Cadjective+min%3D1+max%3D3+id%3Dadj1%3E+%3Camount%3E+of+%3Cadjective+min%3D1+max%3D3%3E+%3Canimal%3E+%3Canimal_part%3E`
    )
    .then(response => {
      console.log(`before: ${response.data.insult}`)
      console.log(`after: ${filter.clean(response.data.insult)}`)
      res.json(`${filter.clean(response.data.insult)}`)
    })
    .catch(error => {
      console.log(error)
    })
})

// switch (Math.floor(Math.random() * Math.floor(5))) {
//   //Sports Team insults
//   case 0:
// axios
//   .get(
//     `https://insult.mattbas.org/api/insult.json?template=The+${sportsTeam}+are+as+%3Cadjective%3E+as+%3Carticle+target%3Dadj1%3E+%3Cadjective+min%3D1+max%3D3+id%3Dadj1%3E+%3Camount%3E+of+%3Cadjective+min%3D1+max%3D3%3E+%3Canimal%3E+%3Canimal_part%3E`
//   )
//   .then(function (response) {
//     console.log(`before: ${response.data.insult}`)
//     console.log(`after: ${filter.clean(response.data.insult)}`)
//     setInsult(filter.clean(response.data.insult))
//   })
//   .catch(function (error) {
//     console.log(error)
//   })
//     break
//   case 1:
//     axios
//       .get(
//         `https://insult.mattbas.org/api/insult.json?template=Only+${sportsTeam}+fans+are+%3Cadjective%3E+%3Canimal%3E+%3Canimal_part%3E`
//       )
//       .then(function (response) {
//         console.log(`before: ${response.data.insult}`)
//         console.log(`after: ${filter.clean(response.data.insult)}`)
//         setInsult(filter.clean(response.data.insult))
//       })
//       .catch(function (error) {
//         console.log(error)
//       })
//     break

//   //Occupation insults
//   case 2:
//     axios
//       .get(
//         `https://insult.mattbas.org/api/insult.json?template=People+who+are+${jobTitle}s+secretly+eat+%3Canimal%3E+%3Canimal_part%3E`
//       )
//       .then(function (response) {
//         console.log(`before: ${response.data.insult}`)
//         console.log(`after: ${filter.clean(response.data.insult)}`)
//         setInsult(filter.clean(response.data.insult))
//       })
//       .catch(function (error) {
//         console.log(error)
//       })
//     break
//   case 3:
//     axios
//       .get(
//         `https://insult.mattbas.org/api/insult.json?template=So+you%27re+a+${jobTitle}%3F+I+didn%27t+know+you+were+%3Carticle+target%3Dadj1%3E+%3Cadjective+id%3Dadj1%3E+%3Camount%3E+of+%3Canimal%3E+%3Canimal_part%3E`
//       )
//       .then(function (response) {
//         console.log(`before: ${response.data.insult}`)
//         console.log(`after: ${filter.clean(response.data.insult)}`)
//         setInsult(filter.clean(response.data.insult))
//       })
//       .catch(function (error) {
//         console.log(error)
//       })
//     break

//   //hobby insults
//   case 4:
//     axios
//       .get(
//         `https://insult.mattbas.org/api/insult.json?template=People+who+like+${hobbyType}+really+like+%3Canimal%3E+%3Canimal_part%3E+because+they%27re+%3Cadjective%3E`
//       )
//       .then(function (response) {
//         console.log(`before: ${response.data.insult}`)
//         console.log(`after: ${filter.clean(response.data.insult)}`)
//         setInsult(filter.clean(response.data.insult))
//       })
//       .catch(function (error) {
//         console.log(error)
//       })
//     break
//   default:
//     axios
//       .get(
//         `https://insult.mattbas.org/api/insult.json?template=You+are+%3Cadjective%3E+if+you+like+${hobbyType}%2C+you+%3Cadjective%3E+%3Canimal%3E`
//       )
//       .then(function (response) {
//         console.log(`before: ${response.data.insult}`)
//         console.log(`after: ${filter.clean(response.data.insult)}`)
//         setInsult(filter.clean(response.data.insult))
//       })
//       .catch(function (error) {
//         console.log(error)
//       })
// }

module.exports = router
