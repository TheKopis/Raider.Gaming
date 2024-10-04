import React from "react";
import './style/App.css';
import illidanImage from './assets/illidan-background.png';
import {useState, useContext} from 'react'
import './style/info.css'

function Info(users, setUser){
    const [name, setName] = useState(undefined)
    const [realm, setRealm] = useState(undefined)
    const getData =  async () => {
        const response = await fetch(`http://localhost:8080?realm=${realm}&charname=${name}`, {
          method: 'GET',
        })
        const data = await response.json()
        // destructure the data
    }
    return(
        <div className='info-field'>
            <input className='name-field' id='charname' placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
            <input className='realm-field' id='realm' placeholder="realm" onChange={(e)=>{setRealm(e.target.value)}}/>
            <button className='submit-button' id='submit' onClick={getData}>submit</button>
        </div>
    )
}

function Leaderboard() {
  return (
    <div className="container">
      <div className="leaderboard">
        <h1>Cash Inc Leaderboard</h1>
        <div className="leaderboard-header">
          <span>Name</span>
          <span>Class</span>
          <span>Specialization</span>
          <span>Current Mythic+ Rating</span>
        </div>
        <div className="leaderboard-entry">
          <span>Bob</span>
          <span>Warrior</span>
          <span>Furry</span>
          <span>1500</span>
        </div>
      </div>
    </div>
  );
}

function App() {

  const [users, setUsers] = useState([])

  return (
    <div className="app">
        <Info users={users} setUsers={setUsers}/>
        <Leaderboard />
    </div>
  );
}
export default App