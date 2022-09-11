import React, { useState } from "react";
import "./SignUp.css";
import "./MyModal.css";
import MyModal from "./MyModal";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [openModal, setOpenModal] = useState(false);

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

          <form className="sign-up-form">
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
            <button
              type="button"
              onClick={() => {
                setOpenModal(true);
              }}
              className="subscribeBtn"
            >
              SUBSCRIBE
            </button>
          </form>
          <span style={{ color: "white" }}>
            We will not spam you. Unsubscribe any time.
          </span>
        </div>
      </div>
      <MyModal
        mName={name}
        mEmail={email}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default SignUpForm;
