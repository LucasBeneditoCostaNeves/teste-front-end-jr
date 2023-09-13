import React from "react";
import { DivTopHeader } from "./components/divTopHeader";
import GlobalStyle from "./style/globalStyled";
import { Header } from "./components/header";
import { Navigate } from "./components/navigate";
import { Background } from "./components/background";
import { Category } from "./components/category";
import { List } from "./components/list";
import { CardSession } from "./components/cardSession";
import { Session } from "./components/session";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <DivTopHeader />
      <Header />
      <Navigate />
      <Background />
      <Category />
      <List />
      <Session />
      <Footer />
    </div>
  );
}

export default App;
