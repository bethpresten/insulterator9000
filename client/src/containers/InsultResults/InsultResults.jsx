import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './InsultResults.css'
import axios from 'axios'
const Filter = require('bad-words'),
  filter = new Filter()
filter.addWords('dicks', 'fuckton', 'fuckload', 'assload')

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
              <button
                className='waves-effect waves-light btn-large hoverable'
                onClick={() => {
                  window.location.reload()
                }}
              >
                Generate Another
              </button>
            </div>
            <br />
            <div className='row'>
              <Link to={`/dashboard`}>
                <button className='waves-effect waves-light btn-large hoverable'>
                  Go To Your Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsultResults
