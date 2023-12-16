import React from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidgetComponent = () => {
  const { itemCount } = React.useContext(CartContext);

  return (
    <div>
      <img src="../images/carrito.png" alt="carrito" className="cart" />
      <section className="sectionNumber">
        <h2 className="number">{itemCount}</h2>
      </section>
    </div>
  );
};
