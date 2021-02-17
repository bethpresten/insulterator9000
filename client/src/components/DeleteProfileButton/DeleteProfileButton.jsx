import React from 'react'
import axios from 'axios'
import './DeleteProfileButton.css'
import { Link } from 'react-router-dom'

function DeleteProfileButton () {
  let id = localStorage.getItem('id')
  const deleteProfile = () => {
    if (id) {
      axios
        .delete(`/api/users/delete-user/${id}`)
        .then(() => {
          alert('profile successfully deleted!')
          localStorage.clear()
          console.log('profile deleted')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  return (
    <div className='center-align'>
      <Link to='/'>
        <button
          className='btn hoverable'
          id='delete-button'
          onClick={() => {
            deleteProfile()
          }}
        >
          Delete Profile
        </button>
      </Link>
    </div>
  )
}
export default DeleteProfileButton
