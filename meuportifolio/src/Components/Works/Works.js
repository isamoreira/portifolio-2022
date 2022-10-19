import React from "react"
import Cards from "../Works/Cards"
import Kiriris from "../Assets/imgkiriris.png"
import styled from "styled-components"

const ContainerWorks = styled.div`

`
const ContainerCards = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
padding: 6rem;
`

export default function Works(){
    const data = [
        {
            
            id:"1",
            url:"https://projetokiriris.vercel.app/",
            name: "Projeto Kiriris - Full Stack",
            descricao:"Nam lacinia fermentum ligula et egestas. Cras scelerisque enim vel velit congue pellentesque. Vestibulum tempus quam eget justo dictum mollis. Curabitur placerat congue pellentesque. Nunc ultrices non nisl sed placerat. Nulla ante odio, gravida in velit et, volutpat suscipit sem. Nam feugiat mauris a pharetra ornare.",
            img:Kiriris
        },
        {
            id:"2",
            url:"https://projetokiriris.vercel.app/",
            name: "Projeto Kiriris",
            descricao:"Nam lacinia fermentum ligula et egestas. Cras scelerisque enim vel velit congue pellentesque. Vestibulum tempus quam eget justo dictum mollis. Curabitur placerat congue pellentesque. Nunc ultrices non nisl sed placerat. Nulla ante odio, gravida in velit et, volutpat suscipit sem. Nam feugiat mauris a pharetra ornare.",
            img:Kiriris
        },
        {
            id:"3",
            url:"https://projetokiriris.vercel.app/",
            name: "Projeto Kiriris",
            descricao:"Nam lacinia fermentum ligula et egestas. Cras scelerisque enim vel velit congue pellentesque. Vestibulum tempus quam eget justo dictum mollis. Curabitur placerat congue pellentesque. Nunc ultrices non nisl sed placerat. Nulla ante odio, gravida in velit et, volutpat suscipit sem. Nam feugiat mauris a pharetra ornare.",
            img:Kiriris
        },
        {
            id:"4",
            url:"https://projetokiriris.vercel.app/",
            name: "Projeto Kiriris",
            descricao:"Nam lacinia fermentum ligula et egestas. Cras scelerisque enim vel velit congue pellentesque. Vestibulum tempus quam eget justo dictum mollis. Curabitur placerat congue pellentesque. Nunc ultrices non nisl sed placerat. Nulla ante odio, gravida in velit et, volutpat suscipit sem. Nam feugiat mauris a pharetra ornare.",
            img:Kiriris
        },
        {
            id:"5",
            url:"https://projetokiriris.vercel.app/",
            name: "Projeto Kiriris",
            descricao:"Nam lacinia fermentum ligula et egestas. Cras scelerisque enim vel velit congue pellentesque. Vestibulum tempus quam eget justo dictum mollis. Curabitur placerat congue pellentesque. Nunc ultrices non nisl sed placerat. Nulla ante odio, gravida in velit et, volutpat suscipit sem. Nam feugiat mauris a pharetra ornare.",
            img:Kiriris
        },
        {
            id:"6",
            url:"https://projetokiriris.vercel.app/",
            name: "Projeto Kiriris",
            descricao:"Nam lacinia fermentum ligula et egestas. Cras scelerisque enim vel velit congue pellentesque. Vestibulum tempus quam eget justo dictum mollis. Curabitur placerat congue pellentesque. Nunc ultrices non nisl sed placerat. Nulla ante odio, gravida in velit et, volutpat suscipit sem. Nam feugiat mauris a pharetra ornare.",
            img:Kiriris
        }
    ]
    return(
        <div>
            <ContainerWorks>
                <h2>My Works</h2>
                <ContainerCards>
                    {data.map((Card) => (
                    <Cards key={Card.id} data={Card} />
              ))}
                </ContainerCards>
            </ContainerWorks>
        </div>
    )
}