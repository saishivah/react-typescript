import React from 'react';
import './App.css';
import { Greet } from './Greet';
import { Person } from './Person';
import { PersonList } from './PersonList';

function App() {
  
  const personName={
    first:'Bruce',
    last:'Wayne',
  }
  const nameList = [
    {
      first:'Bruce',
      last:'Wayne'
  },
  {
    first:'Clark',
    last:'Kent',
  },
  {
    first:'Princess',
    last:'Diana',
  },
]


  return (
    <div className="App">
  
     <Greet name="Hari" messageCount={20} isloggedIn={false}/>
     <Person name={personName}/>
     <PersonList names={nameList}/>


    </div>
  );
}

export default App;
