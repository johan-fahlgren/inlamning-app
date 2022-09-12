import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        bottom: "0px",
        position: "fixed",
        alignItems: "center",
        borderTop: "solid white 1px",
        color: "white",
      }}
    >
      <h4
        style={{
          margin: "10px 0",
          textAlign: "center",
        }}
      >
        &#169; Donald Duck Corp. 2022
      </h4>
    </div>
  );
};

export default Footer;
