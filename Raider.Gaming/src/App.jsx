import {useState} from 'react'
import Info from './components/info';
import Leaderboard from './components/Leaderboard';
import './style/App.css';
import './style/info.css'

function App() {

  const [users, setUsers] = useState([])

  return (
    <div className="app">
        <Info users={users} setUsers={setUsers}/>
        <Leaderboard users={users} setUsers={setUsers}/>
    </div>
  );
}
export default App