import React from "react"
import Header from "./Routes/Header"
import * as S from "./AppStyle"

function App() {
  return (
    <div>
      <S.GlobalStyle />
     <Header link1="Home" link2="About" link3="Works"/>
    </div>
  );
}

export default App;
