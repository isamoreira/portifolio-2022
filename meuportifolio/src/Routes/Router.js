import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Components/About/About"
import Works from "../Components/Works/Works"
import Navbar from "./NavBar";

export default function Router() {
    return (
      <BrowserRouter>
        <Navbar link1="Home" link2="About" link3="Works" />
        <Routes>
          <Route path="/" />
          <Route path="/About" element={<About />} />
          <Route path="/Works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    );
  }