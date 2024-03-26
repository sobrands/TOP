import "./App.css";
import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div>
      <div className="nameInput">
        <label>
          First Name:{" "}
          <input value={firstName} onChange={handleFirstNameChange}></input>
        </label>
        <label>
          Last Name:{" "}
          <input value={lastName} onChange={handleLastNameChange}></input>
        </label>
      </div>
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </div>
  );
}
