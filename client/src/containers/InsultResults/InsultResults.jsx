import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TwitterShareButton, FacebookShareButton } from 'react-share'
import { TwitterIcon, FacebookIcon } from 'react-share'
import './InsultResults.css'
import axios from 'axios'

function InsultResults () {
  const [userInsult, setInsult] = useState('')
  const [userTweet, setTweet] = useState('')
  const [userFacebook, setFacebook] = useState('')

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
    fetch('/api/users/data', OPTIONS).then(res => res.json())
    // .then(res => {})
  }

  //second generate the insult from templates available and make 3rd party API call on BE
  const getInsult = () => {
    axios
      .get(`/api/users/get-insult`)
      .then(response => {
        setInsult(response.data)
        setTweet(`Insulterator 9000: ${response.data}`)
        setFacebook(`Insulterator 9000: ${response.data}`)
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
            <div className='row'>
              <TwitterShareButton
                url='https://warm-anchorage-65464.herokuapp.com/#/'
                title={userTweet}
                className='social-media-share-button'
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <FacebookShareButton
                url='https://warm-anchorage-65464.herokuapp.com/#/'
                quote={userFacebook}
                className='social-media-share-button'
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
            <br />
            <div className='row'>
              <button
                className='waves-effect waves-light btn-large hoverable'
                onClick={() => {
                  getInsult()
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
