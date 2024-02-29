import React, { useState } from "react";
import "./App.css";
import { Greet } from "./Greet";
import { Person } from "./Person";
import { PersonList } from "./PersonList";
import { Status } from "./Status";
// import { Counter } from "./Counter";
import { Counter } from "./components/Counter";
import { Container } from "./Container";
function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Status status="success" />
      <button onClick={handleClick}>Click to update</button>
      <Container
        styles={{ border: "1px solid black", padding: "1rem" }}
      ></Container>
      <Counter />
    </div>
  );
}

export default App;
