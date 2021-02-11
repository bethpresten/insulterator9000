const fetch = require('node-fetch')
const express = require('express')
const app = express()

const id = '6025a2ea6ba0711cf53360ab'
let randNumb = 0
let userData = ''
// let globalUser = {
//   _id: '601c8bc128788e2d19d28463',
//   firstname: 'James',
//   lastname: 'Bailey',
//   password: 'billybob1',
//   email: 'billybob@billy.com',
//   hobby: 'fishing',
//   sport: 'football',
//   occupation: 'welder',
//   lastLogin: '10/10/2020'
// }

const getUserData = () => {
  console.log(id)
  if (id) {
    fetch(`http://localhost:3001/api/users/get-user/${id}`)
      .then(function (result) {
        console.log(result.json)
        return result.json()
      })
      .then(function (json) {
        console.log('getUserData API call')
      })
  }
}
//   axios
//     .get(`/api/users/get-user/${id}`)
//     .then(response => {
//       console.log(response)
//       if (response) {
//         userData = response
//         console.log(userData)
//         return userData
//       }
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

getUserData()
//select a template at random from 0 - 5 (6 templates)

const selectTemplate = insultURL => {
  randNumb = Math.floor(Math.random() * Math.floor(5))
  console.log(`Template #${randNumb} selected!`)
  switch (randNumb) {
    //Sports Team insults
    case 0:
      return `https://insult.mattbas.org/api/insult.json?template=The+${userData.sport}+are+as+%3Cadjective%3E+as+%3Carticle+target%3Dadj1%3E+%3Cadjective+min%3D1+max%3D3+id%3Dadj1%3E+%3Camount%3E+of+%3Cadjective+min%3D1+max%3D3%3E+%3Canimal%3E+%3Canimal_part%3E`
    case 1:
      return `https://insult.mattbas.org/api/insult.json?template=Only+${userData.sport}+fans+are+%3Cadjective%3E+%3Canimal%3E+%3Canimal_part%3E`
    //Occupation insults
    case 2:
      return `https://insult.mattbas.org/api/insult.json?template=People+who+are+${userData.occupation}s+secretly+eat+%3Canimal%3E+%3Canimal_part%3E`
    case 3:
      result`https://insult.mattbas.org/api/insult.json?template=So+you%27re+a+${userData.occupation}%3F+I+didn%27t+know+you+were+%3Carticle+target%3Dadj1%3E+%3Cadjective+id%3Dadj1%3E+%3Camount%3E+of+%3Canimal%3E+%3Canimal_part%3E`

    //hobby insults
    case 4:
      return `https://insult.mattbas.org/api/insult.json?template=People+who+like+${userData.hobby}+really+like+%3Canimal%3E+%3Canimal_part%3E+because+they%27re+%3Cadjective%3E`
    default:
      return `https://insult.mattbas.org/api/insult.json?template=You+are+%3Cadjective%3E+if+you+like+${userData.hobby}%2C+you+%3Cadjective%3E+%3Canimal%3E`
  }
}

module.exports = selectTemplate
