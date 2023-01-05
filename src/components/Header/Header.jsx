import style from './Header.module.scss'
import Card from '../UI/Card/Card'
import { useState , useEffect } from 'react'

const Header = () => {
  
  return (
    <div className={style.header}>
      <div className={style.back__container}></div>
      <Card className={style.container} >
        <h1>Delicious Food, Deliverd To You</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae at illum natus quaerat nemo. Facilis nostrum quidem doloribus eos neque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae at illum natus quaerat nemo. Facilis nostrum quidem doloribus eos neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dignissimos?</p>
      </Card>
    </div>
  )

}

export default Header