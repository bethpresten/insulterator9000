import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="row">
        <h1>Sign in to be INSULERATED!</h1>
      </div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col offset-s2 s8">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate" />
              <label htmlFor="icon_prefix">First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col offset-s2 s8">
              <i className="material-icons prefix">filter_vintage</i>
              <input id="password" type="password" class="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
        </form>
        <div class="row">
          <div className="col s4">
            <button
              className="btn waves-effect waves-light hoverable"
              type="submit"
              name="action"
            >
              Sign in
              <i class="material-icons right">send</i>
            </button>
          </div>
          <div className="col s4">
            <h3> -OR- </h3>
          </div>

          <button
            className="btn waves-effect waves-light hoverable"
            type="submit"
            name="action"
          >
            Register
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
