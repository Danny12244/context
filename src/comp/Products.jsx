import React, { useContext } from "react";
import '../App.css'
import { ThemeContext } from "./Context/ThemeContext";
import Product from "./Product";

const Products = () => {
  const {  isLight } = useContext(ThemeContext);
  return (
    <div>
      Products
      <Product />
      <div className={`accordion accordion-flush  ${isLight ? "light" : "dark"}`} id="accordionFlushExample">
        <div className={`accordion-item  ${isLight ? "light" : "dark"}`}>
          <h2 className={`accordion-header  ${isLight ? "light" : "dark"}`}id="flush-headingOne">
            <button
              className={`accordion-button collapsed  ${isLight ? "light" : "dark"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
            useState
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className={`accordion-collapse collapse  ${isLight ? "light" : "dark"}`}
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className={`accordion-body  ${isLight ? "light" : "dark"}`}>
            React guarantees that setState function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the useEffect or useCallback dependency list.
            </div>
          </div>
        </div>
        <div className={`accordion-item  ${isLight ? "light" : "dark"}`}>
          <h2 className={`accordion-header  ${isLight ? "light" : "dark"}`}  id="flush-headingTwo">
            <button
              className={`accordion-button collapsed  ${isLight ? "light" : "dark"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
             useEffect
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div  className={`accordion-body  ${isLight ? "light" : "dark"}`}>
            Accepts a function that contains imperative, possibly effectful code.

Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.
            </div>
          </div>
        </div>
        <div className={`accordion-item  ${isLight ? "light" : "dark"}`}>
          <h2 className={`accordion-header  ${isLight ? "light" : "dark"}`}  id="flush-headingThree">
            <button
              className={`accordion-button collapsed  ${isLight ? "light" : "dark"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
             useContext
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div  className={`accordion-body  ${isLight ? "light" : "dark"}`}>
            Don’t forget that the argument to useContext must be the context object itself:

Correct: useContext(MyContext)
Incorrect: useContext(MyContext.Consumer)
Incorrect: useContext(MyContext.Provider)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
