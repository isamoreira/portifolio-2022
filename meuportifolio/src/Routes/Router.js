import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Components/About/About"
import Works from "../Components/Works/Works"
import Home from "../Components/Home/Home"
import Navbar from "./NavBar";

export default function Router() {
    return (
      <BrowserRouter>
       <Navbar  />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    );
  }