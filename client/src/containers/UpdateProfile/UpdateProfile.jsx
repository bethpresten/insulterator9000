import './UpdateProfile.css'
import DeleteProfileButton from '../../components/DeleteProfileButton/DeleteProfileButton'
import UserCard from '../../components/UserCard/UserCard'
import UpdateProfileForm from '../../components/UpdateProfileForm/UpdateProfileForm'
import LogOutButton from '../../components/LogoutButton/LogoutButton'
const UpdateProfile = () => {
  return (
    <div className='container center-align'>
      <div className='row'>
        <div className='col s4 m6'>
          <UserCard />
        </div>
        <UpdateProfileForm />
      </div>
      <div className='row' id='delete-row'>
        <DeleteProfileButton />
        <br/>
        <LogOutButton />
      </div>
     

    </div>
  )
}
export default UpdateProfile
