import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App () {
  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/http://insult.mattbas.org/api//insult.json?who=sponge+bob',
        {}
      )
      .then(function (response) {
        console.log(response.data.insult)
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
