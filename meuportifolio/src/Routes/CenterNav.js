import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 20px 30px;
    color: #fff;

  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #2C2C2C;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export default function CenterNav({open}, {link1, link2, link3}) {
  return (
    <Ul open={open}>
      <li><Link to="/">{link1}</Link></li>
      <li><Link to="/About">{link2}</Link></li>
      <li><Link to="/Works">{link3}</Link></li>
    </Ul>
  );
};


