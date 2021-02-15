import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
function Welcome() {
  return (
    <div>
      <br />
      <div className="collection">
        <h1 id="welcome-title">
          WELCOME!! >> GET YOUR SASSY #$%&#@* INSULTS HERE!
        </h1>
      </div>
      <div>
        <iframe
          src="https://giphy.com/embed/qWpMdM0rGVgpW"
          width="480"
          height="264"
          frameBorder="0"
          className="giphy-embed left"
          title="Anchorman insult"
          allowFullScreen
        ></iframe>
        <Link className="btn-large hoverable" to="/login" id="login-button">
          Login
        </Link>
        <Link
          className="btn-large hoverable"
          to="/registration"
          id="register-button"
        >
          Register
        </Link>
        <iframe
          src="https://giphy.com/embed/Pjg3K3U4y0tjbc17Mx"
          width="480"
          height="264"
          frameBorder="0"
          className="giphy-embed right"
          title="Ricky Gervais insult"
          allowFullScreen
        ></iframe>
        <br />
        <br />
      </div>
    </div>
  );
}
export default Welcome;
