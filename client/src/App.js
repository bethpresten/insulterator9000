import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
const Filter = require('bad-words'),
  filter = new Filter()
filter.addWords('dicks', 'fuckton')

function App () {
  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/http://insult.mattbas.org/api//insult.json?who=sponge+bob',
        {}
      )
      .then(function (response) {
        console.log(`before: ${response.data.insult}`)
        console.log(`after: ${filter.clean(response.data.insult)}`)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className='App'>
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
