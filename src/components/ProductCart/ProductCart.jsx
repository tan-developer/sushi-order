import style from "./ProductCart.module.scss";
import { useContext } from 'react';
import CartContext from "../../context/cartContext";

const ProductCart = ({ item }) => {
  const {dispatch} = useContext(CartContext)

  const increaseHandler = () => {
    dispatch({
      type : "INCREASE",
      id : item.id
    })
  }

  const decreaseHandler = () => {
    dispatch({
      type : "DECREASE",
      id : item.id 
    })
  }


  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1>{item.title}</h1>
        <div>
          <h3>${item.price}</h3>
          <b>x {item.amount}</b>
        </div>
      </div>

      <div className={style.adjust}>
        <button onClick={increaseHandler}>&#43;</button>
        <button onClick={decreaseHandler}>&#45;</button>
      </div>
    </div>
  );
};

export default ProductCart;
