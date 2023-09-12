import { useEffect } from "react";
import { DivStyledCard } from "./styled";
interface Root {
  descriptionShort: string;
  photo: string;
  price: number;
  productName: string;
}

export const Card = (element: Root, fileira: number) => {
  //   useEffect(() => {
  //     element.price = element.price * 10;
  //   }, []);
  const numberString = element.price.toString();
  const lastNumber = numberString.slice(-2);
  const rest = numberString.slice(0, -2);

  const promo = Math.floor(element.price - (element.price * 6.6) / 100);
  const promoNumberString = promo.toString();
  const promoLastNumber = promoNumberString.slice(-2);
  const promoRest = promoNumberString.slice(0, -2);

  const credit = Math.floor(promo * 1.75);
  const creditNumberString = credit.toString();
  const creditLastNumber = creditNumberString.slice(-2);
  const creditRest = creditNumberString.slice(0, -2);

  const numberFloat = rest + "," + lastNumber;
  const promoNumberFloat = promoRest + "," + promoLastNumber;
  const creditNumberFloat = creditRest + "," + creditLastNumber;

  return (
    <DivStyledCard className={"list" + String(fileira)}>
      <img src={element.photo} alt="foto" />
      <h5>{element.productName}</h5>
      <div className="risk">
        <h4>R$ {numberFloat}</h4>
      </div>
      <h1>R$ {promoNumberFloat}</h1>
      <h6>ou 2x de R${creditNumberFloat} sem juros</h6>
      <span>Frete grátis</span>
      <button>Comprar</button>
    </DivStyledCard>
  );
};
