import styled from "styled-components"
import {Link} from "react-router-dom"

export const ContainerHeader = styled.header`
background-color: #2C2C2C;
width: 100%;
height: 13vh;
display: flex;
align-items: center;
justify-content: center;
`

export const Nav = styled.nav`
width: 50%;

`

export const List = styled.ul`
list-style-type: none;
display: flex;
justify-content: space-evenly;
align-itens: center;
font-size: 20px;
font-weight: 400;
`

export const LinkS = styled(Link)`
text-decoration: none;
color: #fff;
`