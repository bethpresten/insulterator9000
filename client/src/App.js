import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./containers/Welcome/Welcome";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Registration from "./containers/Registration/Registration";
import Login from "./containers/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useEffect } from 'react'
import axios from 'axios'
const Filter = require('bad-words'),
  filter = new Filter()
filter.addWords('dicks', 'fuckton')

function App() {
  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/http://insult.mattbas.org/api//insult.json?who=sponge+bob',
        {}
      )
      .then(function (response) {
        console.log(`before: ${response.data.insult}`)
        console.log(`after: ${filter.clean(response.data.insult)}`)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  )
}

export default App
