let randNumb = 0
let globalUser = {
  _id: '601c8bc128788e2d19d28463',
  firstname: 'James',
  lastname: 'Bailey',
  password: 'billybob1',
  email: 'billybob@billy.com',
  hobby: 'fishing',
  sport: 'football',
  occupation: 'welder',
  lastLogin: '10/10/2020'
}

//select a template at random from 0 - 5 (6 templates)

const selectTemplate = insultURL => {
  randNumb = Math.floor(Math.random() * Math.floor(5))
  console.log(`Template #${randNumb} selected!`)
  switch (randNumb) {
    //Sports Team insults
    case 0:
      return `https://insult.mattbas.org/api/insult.json?template=The+${globalUser.sport}+are+as+%3Cadjective%3E+as+%3Carticle+target%3Dadj1%3E+%3Cadjective+min%3D1+max%3D3+id%3Dadj1%3E+%3Camount%3E+of+%3Cadjective+min%3D1+max%3D3%3E+%3Canimal%3E+%3Canimal_part%3E`
    case 1:
      return `https://insult.mattbas.org/api/insult.json?template=Only+${globalUser.sport}+fans+are+%3Cadjective%3E+%3Canimal%3E+%3Canimal_part%3E`
    //Occupation insults
    case 2:
      return `https://insult.mattbas.org/api/insult.json?template=People+who+are+${globalUser.occupation}s+secretly+eat+%3Canimal%3E+%3Canimal_part%3E`
    case 3:
      result`https://insult.mattbas.org/api/insult.json?template=So+you%27re+a+${globalUser.occupation}%3F+I+didn%27t+know+you+were+%3Carticle+target%3Dadj1%3E+%3Cadjective+id%3Dadj1%3E+%3Camount%3E+of+%3Canimal%3E+%3Canimal_part%3E`

    //hobby insults
    case 4:
      return `https://insult.mattbas.org/api/insult.json?template=People+who+like+${globalUser.hobby}+really+like+%3Canimal%3E+%3Canimal_part%3E+because+they%27re+%3Cadjective%3E`
    default:
      return `https://insult.mattbas.org/api/insult.json?template=You+are+%3Cadjective%3E+if+you+like+${globalUser.hobby}%2C+you+%3Cadjective%3E+%3Canimal%3E`
  }
}

module.exports = selectTemplate
