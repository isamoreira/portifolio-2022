/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import styled from "styled-components"

const ContainerCards = styled.div`
color: white;
width: 20rem;
padding: 3rem;
@media (max-width: 538px){
    padding: 0rem;
    width: 18rem;
}



`
const Imgprojects =styled.img`
width: 20rem;
padding: 2rem 0rem;
&:hover{
    filter: hue-rotate(60deg);
}
@media (max-width: 538px){
   width: 16rem;
}
@media (max-width: 450px){
    width: 13rem;
 }

`

const ContainerChild = styled.div`
display: flex;
align-itens: center;
justify-content: center;
flex-direction: column;


`
const H3 = styled.h3`
border-bottom: solid 2px yellow;

`
const Txt = styled.p`
width: 20rem;
margin-bottom: 2rem;
text-align: justify;
@media (max-width: 538px){
    width: 16rem;
 }
 @media (max-width: 450px){
    width: 13rem;
 }
`

export default function Cards(data){
    return(
        <ContainerCards>
            <ContainerChild>
                <H3>{data.data.name}</H3>
                <a href={data.data.url} target="_blank"> <Imgprojects src={data.data.img} alt="img"/> </a>
                <Txt>{data.data.descricao}</Txt>
                
            </ContainerChild>
        </ContainerCards>
    )
}