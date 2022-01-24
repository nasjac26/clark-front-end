import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Signin from './components/Signin'
import ProductContainer from "./components/ProductContainer";

function App() {
  const [reload, setReload] = useState(false)
  const [user, setUser ] = useState("");


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [reload]);


  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/products" element={<ProductContainer />}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
