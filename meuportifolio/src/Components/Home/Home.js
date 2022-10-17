import React from "react"
import WomanDev from "../Assets/womandev.gif"
import styled from "styled-components"
import Zap from "../Assets/whatsapp.png"


const ContainerHome = styled.div`
display: flex;
align-itens: center;
justify-content: center;
padding: 4rem;
@media (max-width: 450px){
       
}
`
const DivHome = styled.div`
background-color: #000000;
width: 90%;
color: #fff;
display: flex;
align-itens: center;
justify-content: center;
border: solid 3px yellow;

@media (max-width: 820px){
    flex-direction: column-reverse;   
}

`

const ContainerTxt = styled.div`
border: solid 3px yellow;
display: flex;
flex-direction: column;
justify-content: center;


`

const ContainerImg = styled.div`
padding: 0px 50px;
border: solid 3px yellow;

`

const Txt1 = styled.p`
font-size: 24px;
font-weight: 300;
line-height: 33px;
letter-spacing: 0em;
text-align: left;
`

const Txt2 = styled.p`
font-size: 36px;
font-weight: 800;
line-height: 49px;
letter-spacing: 0em;
text-align: left;


`

const Txt3 = styled.p`
font-size: 24px;
font-weight: 200;
line-height: 33px;
letter-spacing: 0em;
text-align: left;

`

const Img = styled.img`
width: 100%;

`
const Button = styled.button`
width: 80%;
color: #fff;
background-color: #facb30;
padding: 1rem 2rem;
font-size: 20px;
border-radius: 10px 10px;

&:hover{
    padding: 1.1rem 2.2rem; 
}

@media (max-width:1030px){
   font-size: 14px;
   padding: 0.5rem 1rem;
}
@media (max-width:780px){
    width: 40%;
 }

 @media (max-width: 450px){
      width: 60%; 
}
@media (max-width: 380px){
    width: 80%;
}
@media (max-width: 330px){
    width: 100%;
    font-size: 12px;
}
`

const Anchor = styled.a`
color: inherit;
text-decoration: inherit;
background-color: #facb30;
font-weight: 600;
color: #000;
`

const Zapzap = styled.img`
width: 1.5vw;
background-color: #facb30;
position: relative;
top: 0.20rem;
right: 0.4rem;
@media (max-width: 820px){
   top:0.10rem;
}
@media (max-width: 450px){
    width: 3vw;;
}


`



export default function Home(){
    return(
        <ContainerHome>
             <DivHome>

            <ContainerTxt>
                <Txt1>My name's</Txt1>
                <Txt2>Isabella Moreira</Txt2>
                <Txt3>Frontend Developer React</Txt3>
                <Button>
                    <Zapzap src={Zap} alt="link whatsapp" />
                    <Anchor target="_blank" href="https://wa.me/message/UXWK4UDK6LMUA1" > 
                        Contact me on
                    </Anchor>
                </Button>
                </ContainerTxt>
                <ContainerImg>
                <Img src={WomanDev} alt="Gif mulher programando"/>
            </ContainerImg>

            
        </DivHome>
        </ContainerHome>
       
    )
}