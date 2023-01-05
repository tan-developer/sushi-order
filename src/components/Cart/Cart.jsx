import { useContext } from "react";

import style from "./Cart.module.scss";
import Card from "../UI/Card/Card";
import ProductCart from "../ProductCart/ProductCart";

import CartContext from "../../context/cartContext";


const Cart = ({isOpen , toggle}) => {

  const {state} = useContext(CartContext)

  const itemJSX = state.item.map((item) => {
    return <ProductCart item={item} id={item.id} key={item.id} />;
  })

  return (
    <div className={isOpen ? `${style.container} ${style.show}` : `${style.container} ${style.hide}`} >
      <Card className={isOpen ? `${style.Cart} ${style.show__cart}` : `${style.Cart} ${style.hide__cart}`}>
        <div className={style.product}>
          {state.item.length === 0 ? <p class={style.paraph}>There are currently no items in the cart</p> : itemJSX}
        </div>

        <div className={style.amount}>
          <h1>Total Amount :</h1>
          <h1>
            {state.getTotalMoney()}
          </h1>
        </div>

        <div className={style.wrapper}>
          <button onClick={() => toggle(false)}>CLOSE</button>
          <button>ORDER</button>
        </div>

      </Card>
    </div>
  );
};

export default Cart;
