import React from "react";
import Navbar from "./Component/Navbar";
//import Auth from "./Pages/Auth"; // updated import
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//<Route path="/auth" element={<Auth />} />
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} /> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
