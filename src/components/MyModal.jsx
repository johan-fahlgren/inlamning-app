import React from "react";
import "./MyModal.css";

const MyModal = ({ mName, mEmail, open, onClose }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className="MyModal">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalOuter"
      >
        <div className="modal-container">
          <h2 className="modal-h2">Thank you {mName} for Subscribing!</h2>
          <span className="modal-span">We will send updates to: {mEmail}</span>
          <button type="button" className="closeModalBtn" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
