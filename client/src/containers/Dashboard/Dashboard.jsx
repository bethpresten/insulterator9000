// import React, { useState } from "react";
<<<<<<< HEAD
import React from "react";
import "./Dashboard.css";
import UserCard from "../../components/UserCard/UserCard";
=======
import React from 'react'
import './Dashboard.css'
import UserCard from '../../components/UserCard/UserCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
const _id = ''

function Dashboard () {
  const getUser = id => {
    axios
      .put(`/get-user/${id}`)
      .then(response => {
        console.log(response.data)
        getUser()
      })
      .catch(err => {
        console.log(err)
      })
  }
>>>>>>> f64436eac80393d6014f17671a593c8041d875ba

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>Ready to be insulted?</h1>
        </div>
      </div>
<<<<<<< HEAD
      <div className="col s8 m5">
        <UserCard />
      </div>
      <button className="waves-effect waves btn hoverable">
        Go to insult!
      </button>
      <button className="waves-effect waves btn hoverable">
        Update my profile
      </button>
=======
      <div className='row center-align'>
        <UserCard />
      </div>
      <div className='row'>
        <div className='col s6'>
          <Link to={`/insultresults/${_id}`}>
            <button
              className='waves-effect waves btn hoverable'
              onClick={() => {
                getUser(_id)
              }}
            >
              Go to insult!
            </button>
          </Link>
        </div>
        <div className='col s6'>
        <Link to={`/updateprofile/${_id}`}>
          <button className='waves-effect waves btn hoverable'>
            Update my profile
          </button>
          </Link>
        </div>
      </div>
>>>>>>> f64436eac80393d6014f17671a593c8041d875ba
    </div>
  );
}

export default Dashboard;
