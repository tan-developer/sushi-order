import { useContext , useRef } from 'react';
import style from './Product.module.scss'
import CartContext from "../../context/cartContext";

export default function Product ({item}) {
  const inputRef = useRef(null)
  const {dispatch} = useContext(CartContext)

  const addHandler = () => {
    const cloneItem = {...item}

    cloneItem.amount = inputRef.current.value

    dispatch({
      type : "ADD" , 
      item : cloneItem
    })
  }

  return (
    <div className={style.container}>
        <div className={style.info}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <h4>${item.price}</h4>
        </div>
        <div className={style.order}>
          <div className={style.amount}>
            <label>Amount</label>
            <input ref={inputRef} defaultValue={1} type="number" step='1' min={0} max={20}/>
          </div>
          <div className={style.add}>
            <button onClick={addHandler}>+ Add</button>
          </div>
        </div>
    </div>
  )
}