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
    <button
      style={buttonStyle}
      onClick={() => handleClick("https://www.theodinproject.com")}
    >
      {text}
    </button>
  );
}

function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} />
    </div>
  );
}

export default App;
