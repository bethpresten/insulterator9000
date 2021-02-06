const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const axios = require('axios')
const app = express()
const Filter = require('bad-words'),
  filter = new Filter()
filter.addWords('dicks', 'fuckton', 'fuckload', 'assload')

const sportsTeam = "Falcons";
const hobbyType = "fishing";
const jobTitle = "lawyer"
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('client/build'))

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/insulterator9000',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
)

const connection = mongoose.connection

connection.on('connected', () => {
  console.log('Mongoose successfully connected!')
})

connection.on('error', err => {
  console.log('Mongoose connection error: ', err)
})

//api routes

const UserController = require('./controllers/userController');

//sports team insults

axios
  .get(`https://insult.mattbas.org/api/insult.json?template=The+${sportsTeam}+are+as+%3Cadjective%3E+as+%3Carticle+target%3Dadj1%3E+%3Cadjective+min%3D1+max%3D3+id%3Dadj1%3E+%3Camount%3E+of+%3Cadjective+min%3D1+max%3D3%3E+%3Canimal%3E+%3Canimal_part%3E`)
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })
axios
  .get(`https://insult.mattbas.org/api/insult.json?template=Only+${sportsTeam}+fans+are+%3Cadjective%3E+%3Canimal%3E+%3Canimal_part%3E`)
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })
//occupation insults
axios
  .get(`https://insult.mattbas.org/api/insult.json?template=People+who+are+${jobTitle}s+secretly+eat+%3Canimal%3E+%3Canimal_part%3E`)
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })
axios
  .get(`https://insult.mattbas.org/api/insult.json?template=So+you%27re+a+${jobTitle}%3F+I+didn%27t+know+you+were+%3Carticle+target%3Dadj1%3E+%3Cadjective+id%3Dadj1%3E+%3Camount%3E+of+%3Canimal%3E+%3Canimal_part%3E`)
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })
//hobby insults
axios
  .get(`https://insult.mattbas.org/api/insult.json?template=People+who+like+${hobbyType}+really+like+%3Canimal%3E+%3Canimal_part%3E+because+they%27re+%3Cadjective%3E`)
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })
axios
  .get(`https://insult.mattbas.org/api/insult.json?template=You+are+%3Cadjective%3E+if+you+like+${hobbyType}%2C+you+%3Cadjective%3E+%3Canimal%3E`)
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })






app.get('/api/config', (req, res) => {
  res.json({
    success: true
  })
})


app.use('/api/users', UserController)

//catch all view route
app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname, 'client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
