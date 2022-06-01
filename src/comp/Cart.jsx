import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'

const Cart = () => {
    const {count,setCount} = useContext(CartContext)
  return (
    <div>Cart
        <button className="btn btn-primary btn-sm" onClick={() =>setCount(count+1)}>Add to cart</button>
    </div>
  )
}

export default Cart