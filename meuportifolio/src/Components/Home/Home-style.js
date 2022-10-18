import styled from "styled-components"



export const ContainerHome = styled.div`
display: flex;
align-itens: center;
justify-content: center;
padding: 4rem;
@media (max-width: 450px){
       
}
`
export const DivHome = styled.div`
background-color: #000000;
width: 90%;
color: #fff;
display: flex;
align-itens: center;
justify-content: center;
@media (max-width: 820px){
    flex-direction: column-reverse;   
}

`

export const ContainerTxt = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`

export const ContainerImg = styled.div`
padding: 0px 50px;
@media (max-width: 450px){
    padding: 0px 0px;
    margin-right: 40px; 
}



`

export const Txt1 = styled.p`
font-size: 24px;
font-weight: 300;
line-height: 33px;
letter-spacing: 0em;
text-align: left;
`

export const Txt2 = styled.p`
font-size: 36px;
font-weight: 800;
line-height: 49px;
letter-spacing: 0em;
text-align: left;


`

export const Txt3 = styled.p`
font-size: 24px;
font-weight: 200;
line-height: 33px;
letter-spacing: 0em;
text-align: left;

`

export const Img = styled.img`
width: 100%;
@media (max-width: 450px){
    width: 120%; 
    
    
}

`
export const Button = styled.button`
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

export const Anchor = styled.a`
color: inherit;
text-decoration: inherit;
background-color: #facb30;
font-weight: 600;
color: #000;
`

export const Zapzap = styled.img`
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
