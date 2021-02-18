import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "./UpdateProfileForm.css";

const UpdateProfileForm = () => {
  let [occupation, setOccupation] = useState("");
  let [sport, setSport] = useState("");
  let [hobby, setHobby] = useState("");
  let history = useHistory();
  let { id } = useParams();
  let userSport = localStorage.getItem("sport");
  let userHobby = localStorage.getItem("hobby");
  let userOccupation = localStorage.getItem("occupation");

  useEffect(() => {
    if (id) {
      axios
        .put(`/api/users/update-user/${id}`)
        .then((response) => {
          console.log(response.data);
          const { occupation, sport, hobby } = response.data;
          setOccupation(occupation);
          setSport(sport);
          setHobby(hobby);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleUpdateProfile = (e, userData) => {
    e.preventDefault();

    console.log(userData);
    let id = localStorage.getItem("id");

    axios
      .put(`/api/users/update-user/${id}`, userData)
      .then((response) => {
        console.log(response.data);
        //validate user entry in at least one input
        if (sport || hobby || occupation) {
          localStorage.setItem("sport", sport);
          localStorage.setItem("hobby", hobby);
          localStorage.setItem("occupation", occupation);
        } else {
          alert("Please submit at least one update.");
          return;
        }
        alert("user profile updated!");
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          if (hobby === "") {
            hobby = userHobby;
          }
          if (sport === "") {
            sport = userSport;
          }
          if (occupation === "") {
            occupation = userOccupation;
          }

          handleUpdateProfile(
            e,

            {
              occupation,
              sport,
              hobby,
            },
            id
          );
        }}
      >
        <div className="row">
          <div className="input-field col s12 m12 l12">
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
          <div className="col s12">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              id="update-button"
            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateProfileForm;
