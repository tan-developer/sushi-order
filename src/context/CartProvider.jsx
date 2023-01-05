import { useImmerReducer } from "use-immer";
import CartContext from "./cartContext";
import cartReducer from "../reducer/CartReducer";

const CartProvider = ({ children }) => {
  const cartContent = {
    item: [],
    getTotalMoney: function () {
      // eslint-disable-next-line no-unused-expressions

      return (
        "$" +
        this.item
          .reduce((accumulator, object) => {
            return accumulator + object.price * parseFloat(object.amount);
          }, 0)
          .toFixed(2)
      );
    },

    getAmount: function () {
      return (
        "" +
        this.item.reduce((accumulator, object) => {
          return accumulator + parseFloat(object.amount);
        }, 0)
      );
    },

    cleaner : function () {
      return this.item.filter(item => item.amount >= 1)
    }
    
  };

  console.log(cartContent.item)
  const [state, dispatchCart] = useImmerReducer(cartReducer, cartContent);

  return (
    <CartContext.Provider value={{ state: state, dispatch: dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
