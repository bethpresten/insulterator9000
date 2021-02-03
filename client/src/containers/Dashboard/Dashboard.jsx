import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>Ready to be insulted, Rufus?</h1>
        </div>
      </div>
      <div className="col s8 m5">
        <div className="card horizontal hoverable">
          <div className="card-stacked">
            <div className="card-content">
              <h5>Name</h5>
            </div>
            <div className="card-content">
              <h5>Hobbies</h5>
            </div>
            <div className="card-content">
              <h5>Favorite Sports Teams</h5>
            </div>
            <div className="card-content">
              <h5>Occupation</h5>
            </div>
          </div>
        </div>
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
