import React, { createContext } from 'react'

export const CartContext = createContext();



export const CartProvider = ({children}) =>{
    const [count, setCount]= React.useState(0)
    return (
        <CartContext.Provider value={{count,setCount}}>{children}</CartContext.Provider>
    )
}