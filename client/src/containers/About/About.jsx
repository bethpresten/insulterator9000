import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container">
      <div className="row">
        <h4>About the Insulerator9000</h4>
        <p>
          The Insulerator9000 is a tongue-in-cheek, full MERN application that
          uses a third-party API.
        </p>
      </div>
      <div className="row">
        <h4>Created by:</h4>
        <p>
          A team of full-stack developers with Georgia Tech bootcamp graduation
          on the mind. Email us if you're interesting in hiring us for your next
          project!
        </p>
        <div className="row">
          <button
            className="waves-effect waves-light btn hoverable"
            id="email-btn"
          >
            <a href="mailto:prestobeth462@gmail.com"> Email Us!</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
