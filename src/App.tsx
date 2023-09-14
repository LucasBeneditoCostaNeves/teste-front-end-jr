import React, { useContext, useState } from "react";
import { DivTopHeader } from "./components/divTopHeader";
import GlobalStyle from "./style/globalStyled";
import { Header } from "./components/header";
import { Navigate } from "./components/navigate";
import { Background } from "./components/background";
import { Category } from "./components/category";
import { List } from "./components/list";
import { Session } from "./components/session";
import { Footer } from "./components/footer";
import { Card } from "./components/card";
import { CardModal } from "./components/cardModal";
import { Context } from "./context/context";

function App() {
  const { openModal, setOpenModal } = useContext(Context);
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
      {openModal && <CardModal />}
    </div>
  );
}

export default App;
