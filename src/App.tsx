import React, { useState } from "react";
import "./App.css";
import { Greet } from "./Greet";
import { Person } from "./Person";
import { PersonList } from "./PersonList";
import { Status } from "./Status";
// import { Counter } from "./Counter";
import { Counter } from "./components/Counter";
import { Container } from "./Container";
import { theme } from "./components/context/theme";

import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";

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
      <ThemeContextProvider>
        <Status status="success" />
        <button onClick={handleClick}>Click to update</button>
        <Container
          styles={{ border: "1px solid black", padding: "1rem" }}
        ></Container>
        <Counter />
        <Box />
        {/* Here we are using context for box and setting up the theme in theme context */}
      </ThemeContextProvider>
    </div>
  );
}

export default App;
