import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "./Registration.css";
import axios from "axios";

function Registration() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [sport, setSport] = useState("");
  const [hobby, setHobby] = useState("");

  const { id } = useParams();

  useEffect(() => {
    // console.log(id);
    if (id) {
      axios
        .post(`/api/users/create-user`)
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
          setLastName(lastname);
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
      .post(`/api/users/create-user`, userData)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user", response.data._id);
        localStorage.setItem("sport", response.data.sport);
        localStorage.setItem("occupation", response.data.occupation);
        localStorage.setItem("hobby", response.data.hobby);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 id="registration-heading">Register a new account!</h1>
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
                occupation,
                sport,
                hobby,
              },
              id
            );
          }}
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="First Name"
                id="firstname"
                type="text"
                className="validate"
                value={firstname}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="input-field col s6">
              <input
                id="lastname"
                type="text"
                className="validate"
                value={lastname}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <label htmlFor="lastname">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                // className="validate"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="text"
                // className="validate"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="occupation"
                type="text"
                className="validate"
                value={occupation}
                onChange={(e) => {
                  setOccupation(e.target.value);
                }}
              />
              <label htmlFor="occupation">Occupation</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="sport"
                type="text"
                className="validate"
                value={sport}
                onChange={(e) => {
                  setSport(e.target.value);
                }}
              />
              <label htmlFor="Favorite Sport">Favorite Sport</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="hobby"
                type="text"
                className="validate"
                value={hobby}
                onChange={(e) => {
                  setHobby(e.target.value);
                }}
              />
              <label htmlFor="hobby">Name one hobby</label>
            </div>
          </div>
          <Link
            to="/login"
            className="btn waves-effect waves-light"
            id="registration-login-button"
          >
            Already have an account?
          </Link>
          <button
            to="/dashboard"
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            id="registration-button"
            onSubmit={handleCreateProfile}
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
