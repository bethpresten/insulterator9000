import React, {useState} from "react";
import "./Login.css";
import { useParams, useHistory, Link } from 'react-router-dom';
import axios from "axios";
const Login = ({ setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState ("");
 const history = useHistory();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/login", {email, password}).then((response)=> {
      console.log(response);
      setToken(response.data.token);
      history.push("/dashboard")
    }).catch((err)=> {
      console.log(err);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Sign in to be INSULERATED!</h1>
      </div>
      <div className="row">

        <form className="col s12" id="login-form" onSubmit = {handleFormSubmit}>

          <div className="row">
            <div className="input-field col offset-s2 s8">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" 
              type="text" 
              className="validate" 
              value = {email}
              onChange={(e) =>{
              setEmail(e.target.value)
              }}/>
              <label htmlFor="icon_prefix">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col offset-s2 s8">
              <i className="material-icons prefix">filter_vintage</i>
              <input 
              id="password" 
              type="password" 
              class="validate"
              value = {password}
              onChange={(e) =>{
                setPassword(e.target.value)
                }} />
              <label htmlFor="password">Password</label>
            </div>
          </div>

     
        <div class="row" id="button-row">

          <div className="col s4">
            
            <button className="btn waves-effect waves-light hoverable"> Sign in! </button>
            
          </div>
          <div className="col s4">
            <h3> -OR- </h3>
          </div>


          <Link
            className="btn waves-effect waves-light hoverable"
            type="submit"
            name="action"
            to= '/registration'
          >
            Register
            <i className="material-icons right">send</i>
            </Link>

        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
