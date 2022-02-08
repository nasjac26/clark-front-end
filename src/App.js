import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, useParams} from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Signin from './components/Signin'
import AdminTools from "./components/AdminTools";
import Product from "./components/ProductContainer";
import ToolsContainer from "./components/ToolsContainer";
import ProductContainer from "./components/ProductContainer";


function App() {
  const [reload, setReload] = useState(false)
  const [user, setUser ] = useState("");
  const [productList, setProductList] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [toolList, setToolList] = useState([])
  const [inStockToolList, setInStockToolList] = useState([])


  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, [reload]);

   //fetching hair extensions from api inventory
  useEffect(() => {
    fetch("http://localhost:3001/hair_extensions")
    .then(response => response.json())
    .then(data => checkIfProductsExists(data))
}, []);

   //fetching tools from api inventory
  useEffect(() => {
    fetch("http://localhost:3001/tools")
    .then(response => response.json())
    .then(data => checkIfToolsExists(data))
  }, []);



function checkIfToolsExists(data) {
    if (!!data) {
        setToolList(data)
    }
}

function checkIfProductsExists(data) {
  if (!!data) {
      setProductList(data)
  }
}

  return (
    <BrowserRouter>
    <Navbar  user={user} setUser={setUser}/>
    <div>
      <Routes>
        <Route path="/" element={<Home user={user} />}/>
        <Route path="/signup" element={<Signup setUser={setUser} user={user} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />}/>
        <Route path="/signin" element={<Signin setUser={setUser} user={user} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />}/>
        {/* Disabled until ready to sell */}
        {/* <Route path="/products" element={<ProductContainer productList={productList} setProductList={setProductList} />}/> */}
        <Route path="/tools" element={<ToolsContainer toolList={toolList} setToolList={setToolList} />}/>
        <Route path="/admin-tools" element={<AdminTools user={user} toolList={toolList} setToolList={setToolList} />}/>
        <Route path="/tools/:id" element={<Product />} />

      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
