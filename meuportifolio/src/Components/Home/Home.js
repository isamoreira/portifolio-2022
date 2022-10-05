import React from "react"
import WomanDev from "../Assets/womandev.gif"
import styled from "styled-components"

const DivHome = styled.div`
background-color: #000000;
width: 100%;
color: #fff;
display: flex;
align-items: center;
justify-content: center;

`

const ContainerTxt = styled.div`
padding: 0px 60px;
`

const ContainerImg = styled.div`
padding: 0px 60px;
`

const Txt1 = styled.p`
font-size: 24px;
font-weight: 300;
line-height: 33px;
letter-spacing: 0em;
text-align: left;

`

const Txt2 = styled.p`
font-family: Open Sans;
font-size: 36px;
font-weight: 800;
line-height: 49px;
letter-spacing: 0em;
text-align: left;

`

const Txt3 = styled.p`
font-family: Open Sans;
font-size: 24px;
font-weight: 200;
line-height: 33px;
letter-spacing: 0em;
text-align: left;

`

const Img = styled.img`
width: 120%;
`


export default function Home(){
    return(
        <DivHome>

            <ContainerTxt>
                <Txt1>My name's</Txt1>
                <Txt2>Isabella Moreira</Txt2>
                <Txt3>Frontend Developer React</Txt3>
            </ContainerTxt>
            <ContainerImg>
                <Img src={WomanDev} alt="Gif mulher programando"/>
            </ContainerImg>
            
        </DivHome>
    )
}