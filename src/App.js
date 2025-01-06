import React from "react";  
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./screens/Home";


import { BrowserRouter as Router, Routes, Route,link} from "react-router-dom";
import Login from "./screens/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <Router>
      <div>
      <Navbar/>
     <Routes>
       
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
      
      </Routes>
      </div>
    </Router>
  );
}

export default App;
