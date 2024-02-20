import React from "react";
import "./App.css";
import { Greet } from "./Greet";
import { Person } from "./Person";
import { PersonList } from "./PersonList";
import { Status } from "./Status";
import { Header } from "./Header";
import { Oscar } from "./Oscar";
function App() {
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
      <Status status="error" />

      <Header>this children prop is sent as string</Header>
      <Oscar>
        <h1>Oscar awards</h1>
        <h3>This jsx elements are sent as props</h3>
      </Oscar>
      <Greet name="Hari" messageCount={0} isLoggedIn={true} />
    </div>
  );
}

export default App;
