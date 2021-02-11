import React from 'react'
import './UpdateProfile.css'
import DeleteProfileButton from '../../components/DeleteProfileButton/DeleteProfileButton'
import UserCard from '../../components/UserCard/UserCard'
import UpdateProfileForm from '../../components/UpdateProfileForm/UpdateProfileForm'

const UpdateProfile = () => {
  // const handleUpdateProfile = (e, userData) => {
  //   e.preventDefault()
  //   axios
  //     .post('/api/user/:id', userData)
  //     .then(response => {
  //       console.log(response.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  return (
    <div className='container center-align'>
      <div className='row'>
        <div className='col s4'>
          <UserCard />
        </div>
        <UpdateProfileForm />
      </div>
      <div className='row right-align'>
        <DeleteProfileButton />
      </div>
    </div>
  )
}

export default UpdateProfile
