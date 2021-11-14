import React from "react";
import { ButtonWrapper } from "./Button.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./Button.css";

const Button = ({ text, onClick, icon }) => (
  <ButtonWrapper onClick={onClick}>
    {icon && <FontAwesomeIcon icon={icon} />} {text}
  </ButtonWrapper>
);

export default Button;
