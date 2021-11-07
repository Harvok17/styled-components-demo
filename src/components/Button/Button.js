import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";

const Button = ({ text, onClick, icon }) => (
  <button className="btn" onClick={onClick}>
    {icon && <FontAwesomeIcon icon={icon} />} {text}
  </button>
);

export default Button;
