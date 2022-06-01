import React, { useContext } from 'react'
import Cart from './Cart'
import { Authorization } from './Context/AuthContext'

const Product = () => {
    const {isAuthent} = useContext(Authorization)
  return (
    <div>
        <Cart/>
    </div>
  )
}

export default Product