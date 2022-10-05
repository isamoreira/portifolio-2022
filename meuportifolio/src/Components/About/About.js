import React from "react"
import Photopersona from "../Assets/photopersona.jpg"
import styled from "styled-components"

const ContainerAbout = styled.div`
color: #fff;
width: 100%;
display: flex;
justify-content: center;
padding-top: 6rem;
`

const ContainerChild = styled.div`
border: solid 2px #fff;
display: flex;
width: 70%;
padding: 2rem;
`

const ContainerImg = styled.div`
padding: 1rem;
margin-right: 1rem;
`
const Photo = styled.img`
border-radius: 50%;
`

export default function About(){
    return(
        <ContainerAbout>
            <ContainerChild>
                <ContainerImg>
                    <Photo src={Photopersona} alt="Foto Isabella"/> 
                </ContainerImg>
                <div>
                    <h3>About me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus id lacus egestas, luctus enim ut, porttitor neque. 
                        Aliquam dapibus sapien molestie, dictum turpis quis, euismod felis. 
                        Duis hendrerit lacus eu quam pharetra, a hendrerit massa sodales. 
                        Curabitur lacinia leo nisl, sit amet suscipit turpis mollis in.
                        Pellentesque nulla arcu, fermentum ultrices ipsum at, suscipit fermentum mauris. 
                        Suspendisse potenti. Aenean vel sagittis velit. Ut et facilisis tellus, eu ornare leo.
                    </p>
                    <div>
                        <button>Linkedin</button>
                        <button>Curriculum</button>
                    </div>
                </div>
            </ContainerChild>
            
        </ContainerAbout>
    )
}