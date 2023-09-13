import { DivStyledHeader } from "./styled";
import logo from "../../assets/logo.png";
import lupa from "../../assets/magnifyingGlass.png";
import box from "../../assets/group.png";
import heart from "../../assets/heart.png";
import user from "../../assets/userCircle.png";
import cart from "../../assets/shoppingCart.png";

export const Header = () => {
  return (
    <DivStyledHeader>
      <img src={logo} alt="logo" />
      <div className="div-input">
        <input type="text" placeholder="O que você está buscando?" />
        <img src={lupa} alt="lupa" />
      </div>
      <div className="div-icon">
        <img src={box} alt="box" />
        <img src={heart} alt="heart" />
        <img src={user} alt="user" />
        <img src={cart} alt="cart" />
      </div>
    </DivStyledHeader>
  );
};
