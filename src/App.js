import { useState } from "react";
import ErrorPage from "./components/ErrorPage";
import "./index.css"
import AddquestionForm from "./pages/AddQuestion/AddquestionForm";
import Data from "./pages/DataPage/Data";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/loginAndSignup/Login";
import Signup from "./pages/loginAndSignup/Signup";
import Navbar from "./pages/navbar/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  const [name1,setName1]=useState("");
  return (
    <BrowserRouter>
    <Navbar name1={name1} setName1={setName1}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setName1={setName1}/>}/>
      <Route path="/signup" element={<Signup setName1={setName1}/>}/>
      <Route path="/addquestion" element={<AddquestionForm/>}/>
      <Route path="/allData/:category" element={<Data/>}/>
      <Route path="/*" element={<ErrorPage/>}/>
    </Routes>
  
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
