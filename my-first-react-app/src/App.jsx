import { useState } from "react";
import "./App.css";

function Button({
  text = "Click Me!",
  color = "blue",
  fontSize = 12,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };
  return (
    <button style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
}

function App() {
  const [heading, setHeading] = useState("Our first test");
  const handleButtonClick = () => {
    setHeading("Our second test now");
  };

  return (
    <div>
      <h1>{heading}</h1>
      <Button handleClick={handleButtonClick} />
    </div>
  );
}

export default App;
