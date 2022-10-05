import React from "react"
import WomanDev from "../Assets/womandev.gif"
import styled from "styled-components"
import Zap from "../Assets/whatsapp.png"

const DivHome = styled.div`
background-color: #000000;
width: 100%;
color: #fff;
display: flex;
align-items: center;
justify-content: center;

`

const ContainerTxt = styled.div`
padding: 0px 30px;
`

const ContainerImg = styled.div`
padding: 0px 50px;
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
width: 120%;
`
const Button = styled.button`
color: #fff;
background-color: #facb30;
padding: 1rem 2rem;
margin-top: 2rem;
font-size: 20px;
border-radius: 10px 10px;

&:hover{
    padding: 1.1rem 2.2rem; 
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
`



export default function Home(){
    return(
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
    )
}