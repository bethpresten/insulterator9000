
import './App.css'
import React, {useState} from "react";

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './containers/Welcome/Welcome'
import About from './containers/About/About'
import Contact from './containers/Contact/Contact'
import Registration from './containers/Registration/Registration'
import Login from './containers/Login/Login'
import Dashboard from './containers/Dashboard/Dashboard'
import UpdateProfile from './containers/UpdateProfile/UpdateProfile'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import InsultResults from './containers/InsultResults/InsultResults'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
const Filter = require('bad-words'),
  filter = new Filter()
filter.addWords('dicks', 'fuckton')


function App () {
  const [token, setToken] = useState("");

  // localStorage.setItem(
  //   'user',
  //   JSON.stringify({
  //     _id: '601c8bc128788e2d19d28463',
  //     firstname: 'Active',
  //     lastname: 'User',
  //     password: 'ActiveUserPW',
  //     email: 'activeuser@gmail.com',
  //     hobby: 'hobby',
  //     sport: 'sport',
  //     occupation: 'job',
  //     lastLogin: '2/10/2021'
  //   })
  // )
  return (
    <>
      <div className='App'>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' 
            component= {(props) => <Login {...props} setToken = {setToken} />}/>
            <ProtectedRoute path='/dashboard' component={Dashboard} token={token} />
            <Route path='/registration' 
            component= {(props) => <Registration {...props} setToken = {setToken} />}/>
            <ProtectedRoute path='/insultresults' component={InsultResults} token={token} />
            <ProtectedRoute path='/updateprofile' component={UpdateProfile} token={token} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
