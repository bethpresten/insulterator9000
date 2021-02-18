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
                id="fullname"
                type="text"
                className="validate"
                name="Name"
              />
              <label htmlFor="fullname">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <i className="material-icons prefix">email</i>
              <input
                type="email"
                className="validate"
                name="Email"
                id="_replyto"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s8" id="message-row">
              <i className="material-icons prefix">message</i>
              <input
                id="message"
                type="text"
                className="validate"
                name="Message"
                rows="3"
              />
              <label htmlFor="Message">Message</label>
            </div>
          </div>
          <div className="row" id="contact-div">
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
        </form>
      </div>
    </div>
  );
}

export default Contact;
