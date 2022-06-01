import React, { createContext, useState } from 'react';

export const Authorization = createContext();

export const AuthorizationProvider = ({children}) =>{
const [isAuthent, setisAuthent] = useState(false)

const login=(username, password) => {
    if(username && password){
       
        setisAuthent(true)
    }
}

const logout = ()=>{
    setisAuthent(false)
}
    return (
        <Authorization.Provider value={{isAuthent, login,logout}} >{children}</Authorization.Provider>
    )
}