import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pages from "./components/Pages";
// import Home from "./pages/Home";
import Home from "./components/Home";
import Test from "./components/Test";
import Dice from "./components/Dice";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/test" element={<Test />} />
          <Route path="/dice" element={<Dice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
