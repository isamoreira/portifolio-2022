import React from "react"
import Cards from "../Works/Cards"
import Kiriris from "../Assets/imgkiriris.png"

export default function Works(){
    const data = [
        {
            
            id:"1"

            url:"https://projetokiriris.vercel.app/",
            name: "Projeto Kiriris",
            descricao:"Nam lacinia fermentum ligula et egestas. Cras scelerisque enim vel velit congue pellentesque. Vestibulum tempus quam eget justo dictum mollis. Curabitur placerat congue pellentesque. Nunc ultrices non nisl sed placerat. Nulla ante odio, gravida in velit et, volutpat suscipit sem. Nam feugiat mauris a pharetra ornare.",
            img:Kiriris
        },
        {
            id:"2",
            url:"https://projetokiriris.vercel.app/",
            name: "Projeto Kiriris",
            descricao:"Nam lacinia fermentum ligula et egestas. Cras scelerisque enim vel velit congue pellentesque. Vestibulum tempus quam eget justo dictum mollis. Curabitur placerat congue pellentesque. Nunc ultrices non nisl sed placerat. Nulla ante odio, gravida in velit et, volutpat suscipit sem. Nam feugiat mauris a pharetra ornare.",
            img:"C:/Users/babel/OneDrive/Documentos/GitHub/portifolio-2022/meuportifolio/src/Components/Assets/imgkiriris.png"
        },
        {
            id:"3",
            url:"https://projetokiriris.vercel.app/",
            name: "Projeto Kiriris",
            descricao:"Nam lacinia fermentum ligula et egestas. Cras scelerisque enim vel velit congue pellentesque. Vestibulum tempus quam eget justo dictum mollis. Curabitur placerat congue pellentesque. Nunc ultrices non nisl sed placerat. Nulla ante odio, gravida in velit et, volutpat suscipit sem. Nam feugiat mauris a pharetra ornare.",
            img:"../Assets/imgkiriris.png"
        },
        {
            id:"4",
            url:"https://projetokiriris.vercel.app/",
            name: "Projeto Kiriris",
            descricao:"Nam lacinia fermentum ligula et egestas. Cras scelerisque enim vel velit congue pellentesque. Vestibulum tempus quam eget justo dictum mollis. Curabitur placerat congue pellentesque. Nunc ultrices non nisl sed placerat. Nulla ante odio, gravida in velit et, volutpat suscipit sem. Nam feugiat mauris a pharetra ornare.",
            img:"../Assets/imgkiriris.png"
        },
        {
            id:"5",
            url:"https://projetokiriris.vercel.app/",
            name: "Projeto Kiriris",
            descricao:"Nam lacinia fermentum ligula et egestas. Cras scelerisque enim vel velit congue pellentesque. Vestibulum tempus quam eget justo dictum mollis. Curabitur placerat congue pellentesque. Nunc ultrices non nisl sed placerat. Nulla ante odio, gravida in velit et, volutpat suscipit sem. Nam feugiat mauris a pharetra ornare.",
            img:"../Assets/imgkiriris.png"
        },
        {
            id:"6",
            url:"https://projetokiriris.vercel.app/",
            name: "Projeto Kiriris",
            descricao:"Nam lacinia fermentum ligula et egestas. Cras scelerisque enim vel velit congue pellentesque. Vestibulum tempus quam eget justo dictum mollis. Curabitur placerat congue pellentesque. Nunc ultrices non nisl sed placerat. Nulla ante odio, gravida in velit et, volutpat suscipit sem. Nam feugiat mauris a pharetra ornare.",
            img:"../Assets/imgkiriris.png"
        }
    ]
    return(
        <div>
            <div>
                <h2>My Works</h2>
                <div>
                    {data.map((Card) => (
                    <Cards key={Card.id} data={Card} />
              ))}
                </div>
            </div>
        </div>
    )
}