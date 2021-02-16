import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
// import DeleteProfileButton from "../DeleteProfileButton/DeleteProfileButton";

const UpdateProfileForm = () => {
  let [occupation, setOccupation] = useState('')
  let [sport, setSport] = useState('')
  let [hobby, setHobby] = useState('')
  let history = useHistory();
  let { id } = useParams()
  let userSport = localStorage.getItem('sport')
  let userHobby = localStorage.getItem('hobby')
  let userOccupation = localStorage.getItem('occupation')

  useEffect(() => {
    // console.log(id);
    if (id) {
      axios
        .put(`/api/users/update-user/${id}`)
        .then(response => {
          console.log(response.data)
          const { occupation, sport, hobby } = response.data
          setOccupation(occupation)
          setSport(sport)
          setHobby(hobby)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [id])

  const handleUpdateProfile = (e, userData) => {
    e.preventDefault();
    
    console.log(userData)
    let id = localStorage.getItem('id')
   

    
      axios
      .put(`/api/users/update-user/${id}`, userData)
      .then(response => {
        console.log(response.data)
        alert('user profile updated!');
        history.push("/dashboard");
        localStorage.setItem("sport", sport);
        localStorage.setItem("hobby", hobby);
        localStorage.setItem("occupation", occupation);
      })
      .catch(err => {
        console.log(err)
      })
    

  }




  return (
    <>
      <form
        className='col s8'
        onSubmit={e => {
          if( hobby == ""){
              hobby = userHobby;
          }
          if( sport ==""){
            sport = userSport;
          }
          if( occupation == ""){
            occupation = userOccupation;
          }
         
          handleUpdateProfile(
            e,
            
            {
              occupation,
              sport,
              hobby
            },
            id
          )
          
        }}
      >
        <div className='row'>
          <div className='input-field col s12'>
            <input
              id='occupation'
              type='text'
              className='validate'
              value={occupation}
              onChange={e => {
                setOccupation(e.target.value)
              }}
            />
            <label for='occupation'>Occupation</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              id='hobby'
              type='text'
              className='validate'
              value={hobby}
              onChange={e => {
                setHobby(e.target.value)
              }}
            />
            <label for='hobby'>Name one hobby</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              id='sport'
              type='text'
              className='validate'
              value={sport}
              onChange={e => {
                setSport(e.target.value)
              }}
            />
            <label for='Favorite Sport'>Favorite Sport</label>
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
              id='update-button'

            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default UpdateProfileForm
