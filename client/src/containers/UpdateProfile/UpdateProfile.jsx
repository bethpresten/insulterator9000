<<<<<<< HEAD
import "./UpdateProfile.css";
import DeleteProfileButton from "../../components/DeleteProfileButton/DeleteProfileButton";
import UserCard from "../../components/UserCard/UserCard";
import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm";
=======
import './UpdateProfile.css'
import DeleteProfileButton from '../../components/DeleteProfileButton/DeleteProfileButton'
import UserCard from '../../components/UserCard/UserCard'
import UpdateProfileForm from '../../components/UpdateProfileForm/UpdateProfileForm'
import LogOutButton from '../../components/LogoutButton/LogoutButton'
>>>>>>> fd546f965c439cd7b03d6ee744c5ad34d4ddd35a
const UpdateProfile = () => {
  return (
    <div className="container center-align">
      <div className="row">
        <div className="col s4 m4 l4">
          <UserCard />
        </div>
        <UpdateProfileForm />
      </div>
      <div className="row" id="delete-row">
        <DeleteProfileButton />
        <br/>
        <LogOutButton />
      </div>
     

    </div>
  );
};
export default UpdateProfile;
