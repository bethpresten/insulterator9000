<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";
const email = "billybob@billy.com"; // this will come from user registration
=======
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './UserCard.css'
const email = 'billybob@billy.com' // this will come from user registration
>>>>>>> f64436eac80393d6014f17671a593c8041d875ba

const UserCard = () => {
  const [data, setData] = useState('')

  const getData = () => {
    axios
      .get(`/api/users/get-user/${email}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className>
      <div className='card horizontal hoverable'>
        <div className='card-stacked'>
          <div className='card-content left-align'>
            <h5>Name: {data.firstname} {data.lastname}</h5>
            <h5>Hobby: {data.hobby}</h5>
            <h5>Favorite Sports Team: {data.sport}</h5>
            <h5>Occupation: {data.occupation}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
