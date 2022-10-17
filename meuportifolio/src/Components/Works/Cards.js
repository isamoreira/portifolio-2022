import React from "react"
import styled from "styled-components"

const ContainerCards = styled.div`
color: white;
`
const Imgprojects =styled.img`
width: 50%;
`

export default function Cards(data){
    return(
        <ContainerCards>
            <div>
                <h3>{data.data.name}</h3>
                <Imgprojects src={data.data.img} alt="img"/>
                <p>{data.data.descricao}</p>
                <a href={data.data.url}> Site do Projeto</a>
            </div>
        </ContainerCards>
    )
}