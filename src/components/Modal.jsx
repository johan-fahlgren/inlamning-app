import React from "react";
import "./Modal.css";

const Modal = ({ mName }, { mEmail }) => {
  return (
    <div className="modal-outer">
      <div className="modal-container">
        <h2 className="modal-h2">Thank you {mName} for Subscribing!</h2>
        <span className="modal-span">
          We will send updates to the email: {mEmail}
        </span>
      </div>
    </div>
  );
};

export default Modal;
