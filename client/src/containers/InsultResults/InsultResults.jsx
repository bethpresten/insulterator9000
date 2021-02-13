import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './InsultResults.css'
import axios from 'axios'

function InsultResults () {
  const [userInsult, setInsult] = useState('')
  //first get the user data and pass to the BE
  const getUserData = () => {
    const sport = localStorage.getItem('sport')
    const hobby = localStorage.getItem('hobby')
    const occupation = localStorage.getItem('occupation')
    const OPTIONS = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sport: sport,
        hobby: hobby,
        occupation: occupation
      })
    }
    fetch('/api/users/data', OPTIONS)
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  }
  //second generate the insult from templates available and 3rd party API call on BE
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
    getUserData()
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
