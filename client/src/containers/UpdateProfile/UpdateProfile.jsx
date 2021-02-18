import './UpdateProfile.css'
import DeleteProfileButton from '../../components/DeleteProfileButton/DeleteProfileButton'
import UserCard from '../../components/UserCard/UserCard'
import UpdateProfileForm from '../../components/UpdateProfileForm/UpdateProfileForm'
import LogOutButton from '../../components/LogoutButton/LogoutButton'

const UpdateProfile = () => {
  return (
    <div className='container center-align'>
      <div className='row'>
        <div className='col s12 m6 l4'>
          <UserCard />
        </div>
        <div className='col s8 m6'>
          <UpdateProfileForm />
          <LogOutButton />
          <DeleteProfileButton />
        </div>
      </div>
      <div className='row' id='delete-row'></div>
    </div>
  )
}

export default UpdateProfile
