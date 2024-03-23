import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import StateDaily from "./pages/StateDaily";
import StateOverall from "./pages/StateOverall";
import Footer from "./component/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";







export default function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/daily" element={<StateDaily/>}/>
          <Route path="/overall" element={<StateOverall/>}/>
        </Routes>
    </BrowserRouter>
    

    <Footer/>
    </>
  );
}
