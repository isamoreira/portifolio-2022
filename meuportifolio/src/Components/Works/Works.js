import React from "react"
import Cards from "../Works/Cards"
import Kiriris from "../Assets/imgkiriris.png"
import Conexao from "../Assets/caoconexaocerrado.png"
import Lista from "../Assets/listadecompras.png"
import Harry from "../Assets/harrypotter.png"
import Bookstore from "../Assets/bookstore.png"
import Calculadora from "../Assets/calculadora.png"
import Calculadorareact from "../Assets/calculadorareact.png"
import Portflow from "../Assets/portflow.png"
import styled from "styled-components"


const ContainerWorks = styled.div`

`
const ContainerCards = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
padding: 6rem;
@media (max-width: 770px){
    width: 60%;
   }

`

export default function Works(){
    const data = [
        {
            
            id:"1",
            url:"https://projetokiriris.vercel.app/",
            name: "Kiriris Project - Full Stack",
            descricao:"Project developed as a final project for the Full-Stack Development course at Recode Pro, using Sql, Java, Spring, React and Bootstrap. The project brings a register of resellers of products from the Kiriri community in Banzaê - Bahia.",
            img:Kiriris
        },
        {
            id:"2",
            url:"https://caoconexaocerrado.vercel.app/",
            name: "Cerrado Connection Project",
            descricao:"The Cerrado Connection Project was born as the winner of the Conservathon for the preservation of the cerrado. Project of Fundação Grupo Boticário that sought to select projects with a focus on the preservation of native fruits of the cerrado. We present the baru dry pulper, which brings more agility to the baru fruit production chain. Currently, the project is financed by Fundação Grupo Boticário. I developed the project website in wordpress and I also develop the project management.",
            img:Conexao
        },
        {
            id:"3",
            url:"https://listacompras-react.vercel.app/",
            name: "Shopping list - React",
            descricao:"Shopping list developed with React Hooks as evaluative works of the Frontend Development course by Vai na Web.",
            img:Lista
        },
        {
            id:"4",
            url:"https://api-harrypotter.vercel.app/personagens",
            name: "API - Harry Potter",
            descricao:"React project for academic purposes of the Frontend Development course on Vai na Web, consuming an API using Axios and creating cards with styled-components.",
            img:Harry
        },
        {
            id:"5",
            url:"https://springapireact.vercel.app/",
            name: "BookStore - Java (Spring) - React",
            descricao:"Project in React, Java Spring(mvc), SQL for academic purposes of the Full-Stack Development course in Recode Pro, consuming an API using Axios and creating a bootstrap style to create a record (CRUD) in a bookstore.",
            img:Bookstore
        },
        {
            id:"6",
            url:"https://exemploaulacalculadora.babellamoreira.repl.co/",
            name: "Calculator - HTML, CSS, JS",
            descricao:"Project in HTML5, CSS3 and JS for academic purposes of the Frontend Development course - Station Hack Facebook.",
            img:Calculadora
        },
        {
            id:"7",
            url:"https://calculadora-react-delta.vercel.app/",
            name: "Calculator - React",
            descricao:"Calculator developed with React as evaluative works of the Frontend Development course by Vai na Web.",
            img:Calculadorareact
        },
        {
            id:"8",
            url:"https://portflow.vercel.app/",
            name: "Portflow - HTML, CSS, JS",
            descricao:"Project in HTML5, CSS3 and JS for academic purposes of the Frontend Development course by Vai na Web.",
            img:Portflow
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