import React, { useState, useEffect } from 'react'
import axios from 'axios'
const initialState = {
  firstname: '',
  lastname: '',
  hobby: '',
  sport: '',
  occupation: ''
}

const UserCard = () => {
  const [data, setData] = useState(initialState)

  const getData = () => {
    let id = localStorage.getItem('id')
    console.log(id)
    if (id) {
      axios
        .get(`/api/users/get-user/${id}`)
        .then(response => {
          console.log(response.data)
          if (response.data) {
            setData(response.data)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className='card horizontal hoverable'>
        <div className='card-stacked'>
          <div className='card-content left-align'>
            <h5>
              Name: {data.firstname} {data.lastname}
            </h5>
            <h5>Hobby: {data.hobby}</h5>
            <h5>Favorite Sport: {data.sport}</h5>
            <h5>Occupation: {data.occupation}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
