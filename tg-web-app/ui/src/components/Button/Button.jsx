import React from "react";
import "./Button.css";

export const Button = ({ type, title, disabled, onClick }) => {
  return (
    <button className={`btn ${type}`} disabled={disabled} onClick={onClick}>
      {title}
    </button>
  );
};
