import { DivStyled } from "./styled";
import coroa from "../../assets/crownSimple.png";

export const Navigate = () => {
  return (
    <DivStyled>
      <h4 className="h4-only">Todas Categorias</h4>
      <h4 className="h4-only">Supermercado</h4>
      <h4 className="h4-only">Livros</h4>
      <h4 className="h4-only">Moda</h4>
      <h4 className="h4-only">Lançamentos</h4>
      <h4 className="h4-only">Ofertas do dia</h4>
      <div>
        <img src={coroa} alt="coroa" />
        <h4>Assinatura</h4>
      </div>
    </DivStyled>
  );
};
