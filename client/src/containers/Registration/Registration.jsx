import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Registration.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DropdownOccupation from "../../components/DropdownOccupation/DropdownOccupation";
import DropdownSports from "../../components/DropdownSports/DropdownSports";
import DropdownHobbies from "../../components/DropdownHobbies/DropdownHobbies";

function Registration({ handleFormSubmit }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [sport, setSport] = useState("");
  const [hobby, setHobby] = useState("");

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    if (id) {
      axios
        .get(`/api/users/${id}`)
        .then((response) => {
          console.log(response.data);
          const {
            firstname,
            lastname,
            email,
            password,
            occupation,
            sport,
            hobby,
          } = response.data;
          setFirstName(firstname);
          setLastname(lastname);
          setEmail(email);
          setPassword(password);
          setOccupation(occupation);
          setSport(sport);
          setHobby(hobby);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const history = useHistory();

  const handleCreateProfile = (e, userData) => {
    e.preventDefault();
    axios
      .post("/api/users", userData)
      .then((response) => {
        console.log(response.data);
        history.push("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>Register a new account!</h1>
        </div>
      </div>
      <div className="row">
        <form
          className="col s12"
          onSubmit={(e) => {
            handleCreateProfile(
              e,
              {
                firstname,
                lastname,
                password,
                email,
                setOccupation,
                setSport,
                setHobby,
              },
              id
            );
          }}
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="First Name"
                id="first_name"
                type="text"
                className="validate"
              />
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div class="input-field">
              <DropdownOccupation
                id="occupation-dropdown"
                category="Occupation"
                target="dropdown1"
                type="text"
                name="occupation"
                value={occupation}
                onChange={(e) => {
                  setOccupation(e.target.value);
                }}
              />
              <DropdownSports
                id="sports-dropdown"
                category="Sports Team"
                target="dropdown2"
                type="text"
                name="sport"
                value={sport}
                onChange={(e) => {
                  setSport(e.target.value);
                }}
              />
              <DropdownHobbies
                id="hobby-dropdown"
                category="Hobby"
                target="dropdown3"
                type="text"
                name="hobby"
                value={hobby}
                onChange={(e) => {
                  setHobby(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            id="registration-button"
            onSubmit
            handleCreateProfile={handleCreateProfile}
          >
            Finish Registration
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
