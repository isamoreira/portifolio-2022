/* eslint-disable react/style-prop-object */
import React from "react"
import Photopersona from "../Assets/photopersona.jpg"
import styled from "styled-components"
import Curriculo from "../Assets/curriculo.png"
import Linkedin from "../Assets/linkedin.png"

const ContainerAbout = styled.div`
color: #fff;
width: 100%;
display: flex;
justify-content: center;
padding-top: 6rem;

`

const ContainerChild = styled.div`
display: flex;
width: 70%;
padding: 2rem;
@media (max-width: 800px){
    flex-direction:column;
   }

`

const ContainerImg = styled.div`
padding: 1rem;
margin-right: 1rem;
@media (max-width: 800px){
    display: flex;
    justify-content:center;
   }

`
const Photo = styled.img`
border-radius: 50%;
border: solid 8px #facb30;
`
const Containertext = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-left: 5rem;
width: 60%;
@media (max-width: 450px){
    width:100%;
    position: relative;
    right: 5.5rem;
    
   }

`
const ContainerButton = styled.div`
@media (max-width: 800px){
    display: flex;
    align-itens:center;
   }
 
`

const ButtonContact = styled.button`
color: #fff;
background-color: #facb30;
padding: 1rem 2rem;
margin-top: 2rem;
font-size: 20px;
border-radius: 10px 10px;
margin: 1rem;

&:hover{
    padding: 1.1rem 2.2rem; 
}
@media (max-width: 1030px){
    width: 70%;
 }
 @media (max-width: 800px){
    font-size: 14px;
    
   }
   @media (max-width: 450px){
    width:60%;
    
    
   }

`

const H3 =styled.h3`

font-size: 36px;
font-weight: 800;
line-height: 49px;
letter-spacing: 0em;
text-align: left;
`
const Txt = styled.p`
font-size: 16px;
font-weight: 200;
line-height: 25px;
letter-spacing: 0em;
text-align: left;
padding-top: 1rem;
text-align: justify;
@media (max-width: 450px){
    font-size: 14px;
    
   }
`
const AnchorAbout =styled.a`
color: inherit;
text-decoration: inherit;
background-color: #facb30;
font-weight: 600;
color: #000;
`
const Logoimg = styled.img`
width: 1.5vw;
background-color: #facb30;
position: relative;
top: 0.20rem;
right: 0.4rem;
@media (max-width: 1030px){
  top: 0.1rem;
 }
 @media (max-width: 800px){
    width:2.2vw;
    left: -0.2rem;
    
   }
   @media (max-width: 450px){
    width:3vw;
    
   }
   @media (max-width: 450px){
    width:4vw;
    
    
   }
`

export default function About(){
    return(
        <ContainerAbout>

            <ContainerChild>
                <ContainerImg>
                    <Photo src={Photopersona} alt="Foto Isabella"/> 
                </ContainerImg>
                    <Containertext>
                    <H3>About me</H3>
                    <Txt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus id lacus egestas, luctus enim ut, porttitor neque. 
                        Aliquam dapibus sapien molestie, dictum turpis quis, euismod felis. 
                        Duis hendrerit lacus eu quam pharetra, a hendrerit massa sodales. 
                        Curabitur lacinia leo nisl, sit amet suscipit turpis mollis in.
                        Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit fermentum mauris. 
                        Suspendisse potenti. Aenean vel sagittis velit. Ut et facilisis tellus, eu ornare leo.
                    </Txt>
                    
                    <ContainerButton >
                        <ButtonContact>
                            <Logoimg src={Linkedin} alt="" />
                            <AnchorAbout href="https://www.linkedin.com/in/isabella-m-moreira/" target="_blank">Linkedin</AnchorAbout>
                        </ButtonContact>
                        <ButtonContact>
                            <Logoimg src={Curriculo} alt="" />
                            <AnchorAbout href="https://drive.google.com/file/d/1o1G8F1Mgf4XR-XvldtdzSRDQJ5a4hR94/view?usp=drivesdk" target="_blank">Curriculum</AnchorAbout>
 
                        </ButtonContact>
                    </ContainerButton>  
                    </Containertext>
                     
               
              
            </ContainerChild>

            
        </ContainerAbout>
    )
}