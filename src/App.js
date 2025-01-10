import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Users from "./components/Users";
import Prospects from "./components/Prospects";

function App() {
  const [usersData, setUsersData] = useState([])
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showUsers, setShowUsers] = useState(false)
  const [showProspects, setShowProspects] = useState(false)

  const handleLoginForm = () => {
    setShowLoginForm(true);
    setShowUsers(false)
    setShowProspects(false)
  };

  const handleUsers = () => {
    setShowLoginForm(false)
    setShowUsers(true)
    setShowProspects(false)
  }

  const handleProspects = () => {
    setShowLoginForm(false)
    setShowUsers(false)
    setShowProspects(true)
  }

  const handleSaveUser = (userData) => {
    console.log('userData*** ', userData)
    setUsersData([...usersData, userData])
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleLoginForm}>Login</button>
        <button onClick={handleUsers}>Users</button>
        <button onClick={handleProspects}>New Users</button>
      </div>

      {showLoginForm && <LoginForm saveUser={(userData) => handleSaveUser(userData)} />}
      {showUsers && <Users usersData={usersData} />}
      {showProspects && <Prospects />}
    </div>
  );
}

export default App;
