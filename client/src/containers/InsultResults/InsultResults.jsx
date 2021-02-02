import React from 'react'
import './InsultResults.css'
const insult = 'Why you stuck-up, half-witted, scruffy-looking nerfherder!'

function InsultResults () {
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
                <h3>{insult}</h3>
              </div>
            </div>
            <br />
            <br />
            <div className='row'>
              <a className='waves-effect waves-light btn-large hoverable'>
                Generate Another
              </a>
            </div>
            <br />
           
            <div className='row'>
              <a className='waves-effect waves-light btn-large hoverable'>
                Go To Your Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsultResults
