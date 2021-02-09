// import React, { useState } from "react";
import React from "react";
import "./Dashboard.css";
import UserCard from "../../components/UserCard/UserCard";

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>Ready to be insulted?</h1>
        </div>
      </div>
      <div className="col s8 m5">
        <UserCard />
      </div>
      <button className="waves-effect waves btn hoverable">
        Go to insult!
      </button>
      <button className="waves-effect waves btn hoverable">
        Update my profile
      </button>
    </div>
  );
}

export default Dashboard;
