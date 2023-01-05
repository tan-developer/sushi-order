import style from "./Navigation.module.scss";
import { useContext } from "react";
import CartContext from "../../context/cartContext";

const Navigation = ({ toggle }) => {
  const { state } = useContext(CartContext);

  return (
    <nav className={style.nav}>
      <div className={style.title}>
        <h1>ReactMeals</h1>
      </div>
      <div className={style.cart} id="toggle" onClick={() => toggle(true)}>
        <i className="fa-solid fa-cart-shopping"></i>
        <div>Your Cart</div>
        <div>{state.getAmount()}</div>
        <input type="checkbox" id="button" />
      </div>
    </nav>
  );
};

export default Navigation;
