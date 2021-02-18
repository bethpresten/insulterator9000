import React from 'react'

// import "./LogoutButton.css";

function LogOutButton () {
  return (
    <div>
      <button
        className='btn hoverable'
        id='logout-button'
        onClick={() => {
          window.location.reload()
          localStorage.clear()
          alert('successfully logged out!')
        }}
      >
        Logout
      </button>
    </div>
  )
}
export default LogOutButton
