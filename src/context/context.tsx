//Importanto createContext e useState, já vem com o react
import { createContext, useState } from "react";

//Criando nosso contexto
export const Context = createContext({} as any);

//Função que vai englobar nosso contexto
export const GenericoProvider = ({ children }: any) => {
  const [dataModal, setDataModal] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [number, setNumber] = useState(1);
  return (
    <Context.Provider
      value={{
        dataModal,
        setDataModal,
        number,
        setNumber,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};
