import React, { useState } from "react";
import "./SignUp.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handelSubmit = () => {
    //do something
  };

  const handelNameChange = (e) => {
    setName(e.value);
  };

  const handelEmailChange = (e) => {
    setEmail(e.value);
  };

  return (
    <div className="sign-up-outer">
      <div className="sign-up-container">
        <div className="sign-up-content">
          <h2 className="sign-up-h2">Join our newsletter!</h2>
          <span className="sign-up-span">
            Subscribe to get the latest updated from us.
          </span>

          <form className="sign-up-form" onSubmit={handelSubmit}>
            <input
              className="sign-up-input"
              placeholder="Input your name"
              type="text"
              value={name}
              onChange={handelNameChange}
            />
            <input
              className="sign-up-input"
              placeholder="Input your email address"
              type="email"
              value={email}
              onChange={handelEmailChange}
            />
            <button className="subscribeBtn">SUBSCRIBE</button>
          </form>
          <span style={{ color: "white" }}>
            We will not spam you. Unsubscribe any time.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
