import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import StateDaily from "./pages/StateDaily";
import StateOverall from "./pages/StateOverall";


export default function App() {
  

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/daily" element={<StateDaily/>}/>
          <Route path="/overall" element={<StateOverall/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}
