import React from "react";
import "./App.css";
import { Greet } from "./Greet";
import { Person } from "./Person";
import { PersonList } from "./PersonList";
import { Status } from "./Status";
import { Header } from "./Header";
import { Oscar } from "./Oscar";
import { Button } from "./Button";
function App() {
  return (
    <div className="App">
      <Status status="error" />

      <Header>this children prop is sent as string</Header>
      <Oscar>
        <h1>Oscar awards</h1>
        <h3>This jsx elements are sent as props</h3>
      </Oscar>
      <Greet name="Hari" messageCount={0} isLoggedIn={true} />
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
    </div>
  );
}

export default App;
