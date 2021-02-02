import React from 'react'
import './InsultResults.css'
const insult = 'Why you stuck-up, half-witted, scruffy-looking nerfherder!'

function InsultResults () {
  return (
    <div>
      <br />
      <br />
      <br />
      <div class='container'>
        <div class='row'>
        <div class='col s12 m12'>
          <div class='card'>
            <div class='card-content'>
              <h3>{insult}</h3>
            </div>
          </div>
          <div class='row'>
          <a class="waves-effect waves-light btn-large">Generate Another</a>
            </div>
            <br/>
            <div class='row'>
          <a class="waves-effect waves-light btn-large">Go To Your Profile</a>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default InsultResults
