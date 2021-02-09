import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./containers/Welcome/Welcome";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Registration from "./containers/Registration/Registration";
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Dashboard/Dashboard";
import UpdateProfile from "./containers/UpdateProfile/UpdateProfile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useEffect } from 'react'
import InsultResults from './containers/InsultResults/InsultResults';
const Filter = require('bad-words'),
  filter = new Filter()
filter.addWords('dicks', 'fuckton')

function App() {
  useEffect(() => {
    console.log('something needs to happen in App.js...')
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
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/registration" component={Registration} />
            <Route path="/insultresults" component={InsultResults} />
            <Route path="/updateprofile" component={UpdateProfile} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
