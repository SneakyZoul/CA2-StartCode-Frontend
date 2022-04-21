import React, { useState,useEffect } from "react"
import Animals from "./components/Animals";
import facade from "./components/apiFacade";
import LoggedIn from "./components/LoggedIn";
import LogIn from "./components/LogIn";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
 
  const logout = () => {facade.logout()
    setLoggedIn(false)} 
  const login = (user, pass) => {
    facade.login(user,pass)
    .then(res =>setLoggedIn(true));} 

  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>        
          <LoggedIn />
          <br/>
          <button onClick={logout}>Logout</button> 
          <br/>
          <br/>
      <Animals/>
        </div>)}
    </div>
  )
}
export default App;
