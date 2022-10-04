import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Works from "../Components/Works/Works"
import About from "../Components/About/About"
import {Nav, ContainerHeader, List, LinkS} from "./Header-Style"


export default function Header({ link1, link2, link3 }) {
  

    return (
      <BrowserRouter>
        <ContainerHeader>
          <Nav>
            <List>
              <li>
                <LinkS to="/">{link1}</LinkS>
              </li>
              <li>
                <LinkS to="/about">{link2}</LinkS>
              </li>
              <li>
                <LinkS to="/works">{link3}</LinkS>
              </li>
            </List>
          </Nav>
      
        </ContainerHeader>
        <Routes>
          <Route path="/" />
          <Route path="/ods" element={<About />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    );
  }
  