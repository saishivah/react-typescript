import React from 'react';
import './App.css';
import { Greet } from './Greet';
import { Person } from './Person';
import { PersonList } from './PersonList';
import { Status } from './Status';
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
  
     <Status status='error'/>
      

    </div>
  );
}

export default App;
