import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Test from "./components/Test";
import Dice from "./components/Dice";
import Pages from "./components/Pages";
import PageRoutes from "./components/PageRoutes";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/test" element={<Test />} />
          <Route path="/dice" element={<Dice />} />
          <Route path="/*" element={<PageRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
