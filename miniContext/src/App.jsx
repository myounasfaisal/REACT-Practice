import React from "react";
import UserContextProvider from "./context/UserContextProvider"; // Adjust the import path
import Login from "./components/Login/Login"; // Adjust the import path
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
