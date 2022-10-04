import React from "react";
import styled from "styled-components";
import Burger from "./Burguer";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: #2C2C2C;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Navbar;

        
      