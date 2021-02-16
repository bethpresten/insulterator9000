// import React, { useState } from "react";
import React from "react";
import "./Dashboard.css";
import UserCard from "../../components/UserCard/UserCard";
import { Link } from "react-router-dom";
import axios from "axios";

const _id = "";

function Dashboard() {
  const getUser = (id) => {
    axios
      .get(`/get-user/${id}`)
      .then((response) => {
        console.log(response.data);
        getUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>Ready to be insulted?</h1>
        </div>
      </div>
      <div className="row center-align">
        <UserCard />
      </div>
      <div className="row">
        <div className="col s6">
          <Link to={`/insultresults/${_id}`}>
            <button
              className="waves-effect waves btn hoverable"
              onClick={() => {
                getUser(_id);
              }}
            >
              Go to insult!
            </button>
          </Link>
        </div>

        <div className="col s6">
          <Link to={`/updateprofile/${_id}`}>
            <button className="waves-effect waves btn hoverable">
              Update my profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
