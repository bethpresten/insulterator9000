import React from "react";

function Contact() {
  return (
    <div className="container" id="contact-form">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s8">
              <input
                placeholder="First and Last Name"
                id="name"
                type="text"
                className="validate"
                name="Name"
              />
            </div>
          </div>

          <div className="input-field col s6">
            <input
              type="email"
              className="validate"
              placeholder="Email address"
              name="Email"
              id="_replyto"
            />
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="message"
                type="password"
                className="validate"
                name="Message"
                placeholder="Message"
              />
            </div>
            <div className="row">
              <div className="col s6">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  value="Send"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
