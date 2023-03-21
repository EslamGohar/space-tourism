import React from "react";
import "../styles/error.scss";

export const Error = () => {
  return (
    <div className="error-message">
      <h1 className="msg-title">404</h1>
      <h2>Page not found</h2>
      <p className="message">Make sure that address is correct.</p>
    </div>
  );
};
