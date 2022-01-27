import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Signin from './components/Signin'
import AdminTools from "./components/AdminTools";
import ProductContainer from "./components/ProductContainer";

function App() {
  const [reload, setReload] = useState(false)
  const [user, setUser ] = useState("");
  const [productList, setProductList] = useState([])


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [reload]);

   //fetching from api inventory
  useEffect(() => {
    fetch("http://localhost:3000/hair_extensions")
    .then(response => response.json())
    .then(data => checkIfProductsExists(data))
}, []);



function checkIfProductsExists(data) {
    if (!!data) {
        setProductList(data)
    }
}


  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/products" element={<ProductContainer productList={productList} />}/>
          <Route path="/admin-tools" element={<AdminTools productList={productList} />}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
