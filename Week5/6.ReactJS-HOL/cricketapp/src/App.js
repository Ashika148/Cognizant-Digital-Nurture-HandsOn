import React from 'react';
import ListofPlayers from './ListofPlayers';
import { OddPlayers, EvenPlayers, ListofIndianPlayers, IndianPlayers } from './IndianPlayers';

var flag = true;

function App() {
  if(flag === true) {
    return (
      <div>
        <ListofPlayers />
      </div>
    )
  }
  else {
    return (
      <div>
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          <OddPlayers />
          <hr/>
          <h1>Even Players</h1>
          <EvenPlayers />
        </div>
        <hr/>
        <div>
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers}/>
        </div>
      </div>
    )
  }
}

export default App;