import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "./Registration.css";
import axios from "axios";

const Registration = ({ setToken }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [sport, setSport] = useState("");
  const [hobby, setHobby] = useState("");

  const { id } = useParams();

  useEffect(() => {
    localStorage.clear();
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

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", { email, password })
      .then((response) => {
        console.log(response);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("sport", response.data.sport);
        localStorage.setItem("occupation", response.data.occupation);
        localStorage.setItem("hobby", response.data.hobby);
        setToken(response.data.token);
      })
      .catch((err) => {
        console.log(err);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCreateProfile = (e, userData) => {
    e.preventDefault();
    axios.post(`/api/users/create-user`, userData).then((response) => {
      console.log(response.data);
      alert("user profile successfully created!");
      history.push("/dashboard");
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
            handleLogin(e);
          }}
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                id="firstname"
                type="text"
                className="validate"
                value={firstname}
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <label htmlFor="firstname">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="lastname"
                type="text"
                className="validate"
                value={lastname}
                required
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
                className="validate"
                value={password}
                required
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
                type="email"
                className="validate"
                value={email}
                required
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
                required
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
                required
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
                required
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
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            id="registration-button"
            onSubmit={handleCreateProfile}
          >
            Finish Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
