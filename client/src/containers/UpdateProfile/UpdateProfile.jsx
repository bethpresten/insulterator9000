import './UpdateProfile.css'
import DeleteProfileButton from '../../components/DeleteProfileButton/DeleteProfileButton'
import UserCard from '../../components/UserCard/UserCard'
import UpdateProfileForm from '../../components/UpdateProfileForm/UpdateProfileForm'
const UpdateProfile = () => {
  return (
    <div className='container center-align'>
      <div className='row'>
        <div className='col s4 m6'>
          <UserCard />
        </div>
        <div className='col s8 m6'>
          <UpdateProfileForm />
        </div>
      </div>
      <div className='row' id='delete-row'>
        <DeleteProfileButton />
      </div>
    </div>
  )
}
export default UpdateProfile
