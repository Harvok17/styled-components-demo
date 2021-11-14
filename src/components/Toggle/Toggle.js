import { Knob, Wrapper } from "./Toggle.styles";
// import "./Toggle.css";

const Toggle = ({ toggleTheme, mode }) => {
  return (
    <Wrapper onClick={toggleTheme}>
      <Knob mode={mode}></Knob>
    </Wrapper>
  );
};

export default Toggle;
