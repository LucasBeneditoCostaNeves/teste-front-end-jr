import React from "react";
import { DivTopHeader } from "./components/divTopHeader";
import GlobalStyle from "./style/globalStyled";
import { Header } from "./components/header";
import { Navigate } from "./components/navigate";
import { Background } from "./components/background";
import { Category } from "./components/category";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <DivTopHeader />
      <Header />
      <Navigate />
      <Background />
      <Category />
    </div>
  );
}

export default App;
