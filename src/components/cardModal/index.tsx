import { useContext } from "react";
import { Context } from "../../context/context";
import { DivStyleCardModal } from "./styled";

export const CardModal = () => {
  const { dataModal, number, setNumber, setOpenModal } = useContext(Context);
  const numberString = dataModal.price.toString();
  const lastNumber = numberString.slice(-2);
  const rest = numberString.slice(0, -2);
  const promo = Math.floor(dataModal.price - (dataModal.price * 6.6) / 100);
  const promoNumberString = promo.toString();
  const promoLastNumber = promoNumberString.slice(-2);
  const promoRest = promoNumberString.slice(0, -2);

  const promoNumberFloat = promoRest + "," + promoLastNumber;
  const reduce = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  return (
    <DivStyleCardModal>
      <div className="white">
        <img src={dataModal.photo} alt="foto" />
        <div className="column">
          <h2>{dataModal.productName}</h2>
          <h3>R$ {promoNumberFloat}</h3>
          <span className="description">{dataModal.descriptionShort}</span>
          <span className="ancora">Veja mais detalhes do produto {">"}</span>
          <div className="input">
            <span onClick={() => reduce()}>-</span>
            <h3>{number}</h3>
            <span onClick={() => setNumber(number + 1)}>+</span>
          </div>
          <button>Confirmar</button>
        </div>
        <span
          className="close"
          onClick={() => {
            setOpenModal(false);
            setNumber(1);
          }}
        >
          X
        </span>
      </div>
    </DivStyleCardModal>
  );
};
