import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./view/login/Login";
import Navbar from "./component/navbar/Navbar";
import Home from './view/Home/Home'
import ChangeColor from "./view/ChangeColor/ChangeColor";
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change" element={<ChangeColor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
