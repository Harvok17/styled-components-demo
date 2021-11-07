import "./Toggle.css";

const Toggle = ({ toggleTheme, mode }) => {
  return (
    <div className="toggle" onClick={toggleTheme}>
      <div
        className={
          mode === "light" ? "toggle_knob" : "toggle_knob toggle_knob--dark"
        }
      ></div>
    </div>
  );
};

export default Toggle;
