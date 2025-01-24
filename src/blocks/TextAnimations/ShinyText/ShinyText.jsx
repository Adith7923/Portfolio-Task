/*
	jsrepo 1.28.2
	Installed from https://reactbits.dev/default/
	1-22-2025
*/

import "./ShinyText.scss";

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
