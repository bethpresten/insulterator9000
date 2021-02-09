import React from 'react'
import './InsultResults.css'
import axios from 'axios'
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

getInsult () => {
  //generate a random number 1 - 6
  return Math.floor(Math.random() * Math.floor(max));
  // select one of the following templates based on number
  axios
  .get(`https://insult.mattbas.org/api/insult.json?template=The+${sportsTeam}+are+as+%3Cadjective%3E+as+%3Carticle+target%3Dadj1%3E+%3Cadjective+min%3D1+max%3D3+id%3Dadj1%3E+%3Camount%3E+of+%3Cadjective+min%3D1+max%3D3%3E+%3Canimal%3E+%3Canimal_part%3E`)
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })
axios
  .get(`https://insult.mattbas.org/api/insult.json?template=Only+${sportsTeam}+fans+are+%3Cadjective%3E+%3Canimal%3E+%3Canimal_part%3E`)
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })

//occupation insults
axios
  .get(`https://insult.mattbas.org/api/insult.json?template=People+who+are+${jobTitle}s+secretly+eat+%3Canimal%3E+%3Canimal_part%3E`)
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })
axios
  .get(`https://insult.mattbas.org/api/insult.json?template=So+you%27re+a+${jobTitle}%3F+I+didn%27t+know+you+were+%3Carticle+target%3Dadj1%3E+%3Cadjective+id%3Dadj1%3E+%3Camount%3E+of+%3Canimal%3E+%3Canimal_part%3E`)
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })

//hobby insults
axios
  .get(`https://insult.mattbas.org/api/insult.json?template=People+who+like+${hobbyType}+really+like+%3Canimal%3E+%3Canimal_part%3E+because+they%27re+%3Cadjective%3E`)
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })
axios
  .get(`https://insult.mattbas.org/api/insult.json?template=You+are+%3Cadjective%3E+if+you+like+${hobbyType}%2C+you+%3Cadjective%3E+%3Canimal%3E`)
  .then(function (response) {
    console.log(`before: ${response.data.insult}`)
    console.log(`after: ${filter.clean(response.data.insult)}`)
  })
  .catch(function (error) {
    console.log(error)
  })
}
