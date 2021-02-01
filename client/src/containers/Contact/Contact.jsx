import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container" id="contact-form">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s8">
              <i class="material-icons prefix">account_circle</i>
              <input
                placeholder="Name"
                id="name"
                type="text"
                className="validate"
                name="Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <i class="material-icons prefix">email</i>
              <input
                type="email"
                className="validate"
                placeholder="Email address"
                name="Email"
                id="_replyto"
              />
            </div>
            <div className="input-field col s8" id="message-row">
              <i class="material-icons prefix">message</i>
              <input
                id="message"
                type="text"
                className="validate"
                name="Message"
                placeholder="Message"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <button className="btn" type="submit" name="action" value="Send">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
