import React from "react"
import Router from "./Routes/Router";
import * as S from "./AppStyle"

function App() {
  return (
    <div>
      <S.GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
