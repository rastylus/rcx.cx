import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pages from "./components/Pages";
import Home from "./pages/Home";
import Test from "./components/Test";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
