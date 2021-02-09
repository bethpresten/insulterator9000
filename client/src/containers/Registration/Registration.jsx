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
    console.log(id);
    if (id) {
      axios
        .put(`/api/users/${id}`)
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
      .post("/api/users/{id}", userData)
      .then((response) => {
        console.log(response.data);
        history.push("/dashboard");
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
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <label for="lastname">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="text"
                className="validate"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="occupation"
                type="text"
                className="validate"
                onChange={(e) => {
                  setOccupation(e.target.value);
                }}
              />
              <label for="occupation">Occupation</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="hobby"
                type="text"
                className="validate"
                onChange={(e) => {
                  setHobby(e.target.value);
                }}
              />
              <label for="hobby">Name one hobby</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="sport"
                type="text"
                className="validate"
                onChange={(e) => {
                  setSport(e.target.value);
                }}
              />
              <label for="Favorite Sports Team">Favorite Sports Team</label>
            </div>
          </div>

          <Link
            to="/dashboard/{id}"
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            id="registration-button"
            onSubmit
            handleCreateProfile={handleCreateProfile}
          >
            Finish Registration
            <i className="material-icons right">send</i>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Registration;
