const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3001

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('client/build'))

//mongoose connection
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



//test route
app.get('/api/config', (req, res) => {
  res.json({
    success: true
  })
})

//set all routes prefix to '/api/users'
app.use('/api/users', UserController)

//catch all view route
app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname, 'client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
