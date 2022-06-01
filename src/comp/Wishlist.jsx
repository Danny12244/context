import React, { useContext } from 'react'
import { Authorization } from './Context/AuthContext';

const Wishlist = () => {
  const { isAuthent} = useContext(Authorization);
  return (
    <div className="container-fluid">
      {isAuthent ? <p className="fs-5 fw-bolder ">Hello, Sir</p>:<p className="fs-5  ">Hello, Sign in</p>}
    </div>
  )
}

export default Wishlist