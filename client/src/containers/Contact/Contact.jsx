import React from "react";
import "./Contact.css";

function sendEmail() {
  alert(
    "Your message has been sent.  Please allow 24-48 business hours for a response."
  );
  window.location.href = "/dashboard";
}

function Contact() {
  return (
    <div className="container" id="contact-form">
      <div className="row">
        <form
          action="https://formspree.io/f/mbjpblpg"
          className="col s12"
          method="post"
        >
          <div className="row">
            <div className="input-field col s8">
              <i className="material-icons prefix">account_circle</i>
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
              <i className="material-icons prefix">email</i>
              <input
                type="email"
                className="validate"
                placeholder="Email address"
                name="Email"
                id="_replyto"
              />
            </div>
            <div className="input-field col s8" id="message-row">
              <i className="material-icons prefix">message</i>
              <input
                id="message"
                type="text"
                className="validate"
                name="Message"
                placeholder="Message"
                rows="3"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <button
                className="btn"
                type="submit"
                name="action"
                value="Send"
                onClick={sendEmail}
              >
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
