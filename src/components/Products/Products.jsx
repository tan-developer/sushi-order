import style from "./Products.module.scss"
import Card from '../UI/Card/Card'
import Product from '../Product/Product'


export default function Products ({data}) {
  return (
    <div className={style.container}>
      <Card getHeight={() => {}} className={style.Card}>
        {data.map(item => {
          return <Product item={item} id={item.id} key={item.id}/>
        })}
      </Card>
    </div>

  )

}