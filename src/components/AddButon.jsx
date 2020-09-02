import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function AddButon() {
  const [cartCounter, setCartCounter] = useContext(CartContext);

  return (
    <button
      className="container__info-button"
      onClick={() => setCartCounter(cartCounter + 1)}
    >
      Add to Cart
    </button>
  );
}
