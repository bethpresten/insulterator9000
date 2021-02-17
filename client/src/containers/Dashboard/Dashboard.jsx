import React from 'react'
import './Dashboard.css'
import UserCard from '../../components/UserCard/UserCard'
import { Link } from 'react-router-dom'

function Dashboard () {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12'>
          <h1>Ready to be insulted?</h1>
        </div>
      </div>
      <div className='row center-align'>
        <UserCard />
      </div>
      <div className='row'>
        <div className='col s6'>
          <Link to={`/insultresults/`}>
            <button className='waves-effect waves btn hoverable'>
              Go to insult!
            </button>
          </Link>
        </div>

        <div className='col s6'>
          <Link to={`/updateprofile/`}>
            <button className='waves-effect waves btn hoverable'>
              Update my profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
