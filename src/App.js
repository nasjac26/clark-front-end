import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, useParams} from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Signin from './components/Signin'
import AdminTools from "./components/AdminTools";
import HairExtensionCard from "./components/HairExtensionCard";
import ToolsContainer from "./components/ToolsContainer";
import HairExtensionContainer from "./components/HairExtensionContainer";
import Product from "./components/Product"
import ClassContainer from "./components/ClassContainer";


function App() {
  const [reload, setReload] = useState(false)
  const [user, setUser ] = useState("");
  const [hairExtensionList, sethairextensionList] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [toolList, setToolList] = useState([])
  const [inStockToolList, setInStockToolList] = useState([])
  const [classList, setClassList] = useState("")


   //fetching hair extensions from api inventory
  useEffect(() => {
    fetch("http://localhost:3001/hair_extensions")
    .then(response => response.json())
    .then(data => checkIfHairProductsExists(data))
}, []);

   //fetching tools from api inventory
  useEffect(() => {
    fetch("http://localhost:3001/tools")
    .then(response => response.json())
    .then(data => checkIfToolsExists(data))
  }, []);


  useEffect(() => {
      fetch("http://localhost:3001/events")
      .then(response => response.json())
      .then(data => checkIfClassesExists(data))
  }, [])


function checkIfToolsExists(data) {
    if (!!data) {
        setToolList(data)
    }
}

function checkIfHairProductsExists(data) {
  if (!!data) {
      sethairextensionList(data)
  }
}
function checkIfClassesExists(data) {
  if (!!data) {
      setClassList(data)
  }
}
console.log(toolList)
  return (
    <BrowserRouter>
    <Navbar  user={user} setUser={setUser}/>
    <div>
      <Routes>
        <Route path="/" element={<Home user={user} />}/>
        <Route path="/signup" element={<Signup setUser={setUser} user={user} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />}/>
        <Route path="/signin" element={<Signin setUser={setUser} user={user} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />}/>
        {/* Disabled until ready to sell */}
        {/* <Route path="/products" element={<ProductContainer hairExtensionList={hairExtensionList} sethairextensionList={sethairextensionList} />}/> */}
        <Route path="/tools" element={<ToolsContainer toolList={toolList} setToolList={setToolList} />}/>
        <Route path="/admin-tools" element={<AdminTools user={user} toolList={toolList} setToolList={setToolList} />}/>
        <Route path="/tools/:id" element={<Product toolList={toolList} />} />
        <Route path="/classes" element={<ClassContainer classList={classList} />} />

      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
