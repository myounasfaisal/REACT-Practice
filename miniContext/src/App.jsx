import React from "react";
import UserContextProvider from "./context/UserContextProvider"; // Adjust the import path
import Login from "./components/Login/Login"; // Adjust the import path
import Profile from "./components/Profile/Profile";
import ClickCounter from "./components/ClickCounter";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile/>

      <ClickCounter/>
    </UserContextProvider>
  );
}

export default App;
