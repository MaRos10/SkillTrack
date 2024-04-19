import Nav from "./components/Nav";
import Home from "./pages/home";
import HtmlCss from "./pages/html-css";
import JavaScript from "./pages/javascript";
import React from "./pages/react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/htmlcss" element={<HtmlCss />}></Route>
        <Route path="/javascript" element={<JavaScript />}></Route>
        <Route path="/react" element={<React />}></Route>
      </Routes>
    </div>
  );
}

export default App;
