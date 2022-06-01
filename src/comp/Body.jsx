import React, { useContext  } from "react";
import { CartContext } from "./Context/CartContext";

import Products from "./Products";

const Body = () => {
  const {count} = useContext(CartContext)
  return (
    <div>
      Body


      Cart Added Product:{count}
      <Products />
    </div>
  );
};

export default Body;
