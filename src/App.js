import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

export const StoreContext = React.createContext();

function App() {
  
  const [userType, setUserType] = useState("User 1");
  const [instance, setInstance] = useState({});
  const [arrayBuffer, setArrayBuffer] = useState({});
  const userOptions = ["User 1", "User 2"];

  // Context data
  const value = {
    userType,
    userOptions,
    setUserType,
    instance,
    setInstance,
    arrayBuffer,
    setArrayBuffer,
  };

  return (
    <StoreContext.Provider value={value}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </StoreContext.Provider>
  );
}

export default App;
