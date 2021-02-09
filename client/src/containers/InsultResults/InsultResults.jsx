import React, { useEffect, useState } from 'react'
import './InsultResults.css'
import axios from 'axios'
const Filter = require('bad-words'),
  filter = new Filter()
filter.addWords('dicks', 'fuckton', 'fuckload', 'assload')
const sportsTeam = 'Buccaneers'
const hobbyType = 'fishing'
const jobTitle = 'lawyer'
const insult = 'test'

function InsultResults () {
  const [userInsult, setInsult] = useState('')
  const getInsult = () => {
    axios
      .get(`/api/users/get-insult`)
      .then(response => {
        console.log(response.data)
        setInsult(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getInsult()
  }, [])

  return (
    <div>
      <br />
      <br />
      <br />
      <div className='container'>
        <div className='row'>
          <div className='col s12 m12'>
            <div className='card'>
              <div className='card-content'>
                <h3>{userInsult}</h3>
              </div>
            </div>
            <br />
            <br />
            <div className='row'>
              <button className='waves-effect waves-light btn-large hoverable'>
                Generate Another
              </button>
            </div>
            <br />
            <div className='row'>
              <button className='waves-effect waves-light btn-large hoverable'>
                Go To Your Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsultResults