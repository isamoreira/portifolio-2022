import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

const LinkS = styled(Link)`
color: inherit;
text-decoration: inherit;
background-color: #2C2C2C;
`


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0px 40px;
  background-color: #2C2C2C;
  position: relative;
  right: 45px;
  li {
    background-color: #2C2C2C;
    padding: 20px 60px;
    color: #fff;
    &:hover {
      border-bottom: solid 5px #facb30;
      color: #facb30;
      }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #2C2C2C;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 25vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export default function CenterNav({open, link1, link2, link3}) {
  return (
    <Ul open={open}>
      <li><LinkS to="/">{link1}</LinkS></li>
      <li><LinkS to="/About">{link2}</LinkS></li>
      <li><LinkS to="/Works">{link3}</LinkS></li>
    </Ul>
    
  );
};


